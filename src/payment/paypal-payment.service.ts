import { Injectable } from '@nestjs/common';
import * as Paypal from '@paypal/checkout-server-sdk';
import { Order } from 'src/orders/entities/order.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PaypalPaymentService {
  private clientId: string;
  private clientSecret: string;
  private environment: any;
  private client: any;
  private paypal: any;
  constructor() {
    this.paypal = Paypal;
    this.clientId = process.env.PAYPAL_CLIENT_ID_MAIN; //process.env.PAYPAL_SANDBOX_CLIENT_ID;
    this.clientSecret = process.env.PAYPAL_SECRET_KEY_MAIN; //process.env.PAYPAL_SANDBOX_CLIENT_SECRET;
    console.log(
      'process.env.PAYPAL_SECRET_KEY_MAIN',
      process.env.PAYPAL_SECRET_KEY_MAIN,
    );
    console.log(
      'process.env.PAYPAL_CLIENT_ID_MAIN',
      process.env.PAYPAL_CLIENT_ID_MAIN,
    );
    // This sample uses SandboxEnvironment. In production, use LiveEnvironment
    this.environment = new this.paypal.core.LiveEnvironment(
      this.clientId,
      this.clientSecret,
    );
    this.client = new this.paypal.core.PayPalHttpClient(this.environment);
  }

  async createPaymentIntent(order: Order) {
    const request = await new this.paypal.orders.OrdersCreateRequest();
    request.headers = {
      ...request.headers,
      'Content-Type': 'application/json',
      'PayPal-Request-Id': uuidv4(),
    };
    const body = this.getRequestBody(order);
    request.requestBody(body);
    try {
      const response = await this.client.execute(request);
      const { links, id } = await response.result;
      return {
        redirect_url: links[1].href,
        id: id,
      };
    } catch (error) {
      console.log(
        'process.env.PAYPAL_SECRET_KEY_MAIN',
        process.env.PAYPAL_SECRET_KEY_MAIN,
      );
      console.log(
        'process.env.PAYPAL_CLIENT_ID_MAIN',
        process.env.PAYPAL_CLIENT_ID_MAIN,
      );
      console.log(error);
    }
  }

  async verifyOrder(orderId: string | number) {
    try {
      const request = await new this.paypal.orders.OrdersCaptureRequest(
        orderId,
      );
      request.requestBody({});
      const response = await this.client.execute(request);
      return {
        id: response.result.id,
        status: response.result.status,
      };
    } catch (err:any) {
      console.log('err', err);
      return {
        id : 'CAPATURED',
        status: 'CAPATURED'
      }
    }
  }

  private getRequestBody(order: Order) {
    const redirectUrl = process.env.SHOP_URL || 'http://localhost:3003';
    return {
      intent: 'CAPTURE',
      payment_source: {
        paypal: {
          experience_context: {
            return_url: `${redirectUrl}/orders/${order.tracking_number}/thank-you`,
            payment_method_preference: 'IMMEDIATE_PAYMENT_REQUIRED',
            cancel_url: `${redirectUrl}/orders/${order.tracking_number}/payment`,
            user_action: 'PAY_NOW',
          },
        },
      },
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: order.amount,
          },
          description: `Order From ${order.customer_contact}`,
          reference_id: order.tracking_number.toString(),
        },
      ],
    };
  }
}
