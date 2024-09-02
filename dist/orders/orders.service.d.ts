import { AuthService } from 'src/auth/auth.service';
import { PaymentIntent } from 'src/payment-intent/entries/payment-intent.entity';
import { PaypalPaymentService } from 'src/payment/paypal-payment.service';
import { StripePaymentService } from 'src/payment/stripe-payment.service';
import { Setting } from 'src/settings/entities/setting.entity';
import { CreateOrderStatusDto, UpdateOrderStatusDto } from './dto/create-order-status.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { GetOrderFilesDto } from './dto/get-downloads.dto';
import { GetOrderStatusesDto, OrderStatusPaginator } from './dto/get-order-statuses.dto';
import { GetOrdersDto, OrderPaginator } from './dto/get-orders.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CheckoutVerificationDto, VerifiedCheckoutData } from './dto/verify-checkout.dto';
import { OrderStatus } from './entities/order-status.entity';
import { Order, OrderFiles, OrderStatusType, PaymentStatusType } from './entities/order.entity';
import { TygaPayPayentService } from 'src/payment/tygapay-payment.service';
export declare class OrdersService {
    private readonly authService;
    private readonly stripeService;
    private readonly paypalService;
    private readonly tygaPayPayentService;
    private orders;
    private orderStatus;
    private orderFiles;
    private setting;
    constructor(authService: AuthService, stripeService: StripePaymentService, paypalService: PaypalPaymentService, tygaPayPayentService: TygaPayPayentService);
    create(createOrderInput: CreateOrderDto): Promise<Order>;
    getOrders({ limit, page, customer_id, tracking_number, search, shop_id, email, }: GetOrdersDto): Promise<OrderPaginator>;
    getOrdersByEmail(email: string): Promise<Order[]>;
    getOrderByIdOrTrackingNumber(id: number): Promise<Order>;
    getOrderStatuses({ limit, page, search, orderBy, }: GetOrderStatusesDto): OrderStatusPaginator;
    getOrderStatus(param: string, language: string): OrderStatus;
    update(id: number, updateOrderInput: UpdateOrderDto): Order;
    remove(id: number): string;
    verifyCheckout(input: CheckoutVerificationDto): VerifiedCheckoutData;
    createOrderStatus(createOrderStatusInput: CreateOrderStatusDto): OrderStatus;
    updateOrderStatus(updateOrderStatusInput: UpdateOrderStatusDto): OrderStatus;
    getOrderFileItems({ page, limit }: GetOrderFilesDto): Promise<{
        count: number;
        current_page: number;
        firstItem: number;
        lastItem: number;
        last_page: number;
        per_page: number;
        total: number;
        first_page_url: string;
        last_page_url: string;
        next_page_url: string;
        prev_page_url: string;
        data: OrderFiles[];
    }>;
    getDigitalFileDownloadUrl(digitalFileId: number): Promise<string>;
    exportOrder(shop_id: string): Promise<string>;
    downloadInvoiceUrl(shop_id: string): Promise<string>;
    processPaymentIntent(order: Order, setting: Setting): Promise<PaymentIntent>;
    savePaymentIntent(order: Order, paymentGateway?: string): Promise<any>;
    stripePay(order: Order): Promise<void>;
    paypalPay(order: Order): Promise<void>;
    changeOrderPaymentStatus(orderStatus: OrderStatusType, paymentStatus: PaymentStatusType): void;
}
