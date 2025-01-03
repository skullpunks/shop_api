/*const fs = require('fs');
const path = require('path');

const baseData = {
  "shop": {
    "address": {
      "zip": "61032",
      "city": "Freeport",
      "state": "Illinois",
      "country": "USA",
      "street_address": "1986  Spinnaker Lane"
    },
    "settings": {
      "location": {
        "lat": 38.9032325,
        "lng": -77.0211068,
        "city": "Washington",
        "state": "DC",
        "country": "United States",
        "formattedAddress": "New York Ave NW, Washington, DC, USA"
      },
      "contact": "018927525111",
      "socials": [
        {
          "_id": "66c75afbbdc1efe45d9022d0",
          "url": "https://www.facebook.com/",
          "icon": "FacebookIcon"
        },
        {
          "_id": "66c75afbbdc1efe45d9022d1",
          "url": "https://www.instagram.com/",
          "icon": "InstagramIcon"
        },
        {
          "_id": "66c75afbbdc1efe45d9022d2",
          "url": "https://www.twitter.com/",
          "icon": "TwitterIcon"
        }
      ],
      "website": "https://redq.io/"
    },
    "id": 6,
    "owner_id": 1,
    "name": "Grocery Shop",
    "slug": "grocery-shop",
    "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
    "cover_image": {
      "id": "894",
      "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
      "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg",
      "_id": "66c75afbbdc1efe45d9022ce"
    },
    "logo": {
      "id": "893",
      "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
      "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg",
      "_id": "66c75afbbdc1efe45d9022cf"
    },
    "is_active": 1,
    "created_at": "2021-06-27T03:48:23.000Z",
    "updated_at": "2021-07-08T09:22:38.000Z"
  },
  "_id": "66c5f773e0d4310148e62f21",
  "type_id": 1,
  "price": 2,
  "shop_id": 6,
  "sale_price": 1000,
  "language": "en",
  "min_price": 1000,
  "max_price": 1000,
  "sku": "1",
  "quantity": 18,
  "in_stock": 1,
  "is_taxable": 0,
  "shipping_class_id": null,
  "status": "publish",
  "product_type": "simple",
  "unit": "1lb",
  "height": null,
  "width": null,
  "length": null,
  "video": null,
  "deleted_at": null,
  "created_at": "2021-03-08T10:24:53.000Z",
  "updated_at": "2021-12-23T18:16:06.000Z",
  "author_id": null,
  "manufacturer_id": null,
  "is_digital": 0,
  "is_external": 0,
  "external_product_url": null,
  "external_product_button_text": null,
  "ratings": 4.67,
  "total_reviews": 3,
  "in_wishlist": false,
  "blocked_dates": [],
  "translated_languages": ["en"],
  "categories": [
    {
      "id": 1,
      "name": "Greeting",
      "slug": "Greeting",
      "language": "en",
      "parent_id": null,
      "pivot": {
        "product_id": 1,
        "category_id": 1
      }
    },
    {
      "id": 2,
      "name": "Birthday Cards",
      "slug": "birthday-cards",
      "language": "en",
      "parent_id": 1,
      "pivot": {
        "product_id": 1,
        "category_id": 2
      }
    }
  ],
  "type": {
    "id": 1,
    "name": "Grocery",
    "settings": {
      "isHome": true,
      "layoutType": "classic",
      "productCard": "helium",
      "_id": "66c75afbbdc1efe45d9022d3"
    },
    "slug": "grocery",
    "language": "en",
    "icon": "FruitsVegetable",
    "promotional_sliders": [
      {
        "_id": "66c75afbbdc1efe45d9022d4",
        "id": "902",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/offer-5.png",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/conversions/offer-5-thumbnail.jpg"
      },
      {
        "_id": "66c75afbbdc1efe45d9022d5",
        "id": "903",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/903/offer-4.png",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/903/conversions/offer-4-thumbnail.jpg"
      },
      {
        "_id": "66c75afbbdc1efe45d9022d6",
        "id": "904",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/offer-3.png",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/conversions/offer-3-thumbnail.jpg"
      },
      {
        "_id": "66c75afbbdc1efe45d9022d7",
        "id": "905",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/offer-2.png",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/conversions/offer-2-thumbnail.jpg"
      },
      {
        "_id": "66c75afbbdc1efe45d9022d8",
        "id": "906",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/offer-1.png",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/conversions/offer-1-thumbnail.jpg"
      }
    ],
    "created_at": "2021-03-08T07:18:25.000Z",
    "updated_at": "2021-09-26T15:23:32.000Z",
    "translated_languages": ["en"],
    "_id": "66c75afbbdc1efe45d9022d9"
  },
  "variations": [],
  "metas": [],
  "manufacturer": null,
  "variation_options": [],
  "tags": [],
  "author": null
};

const urls = [
  "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Birthday+cards/G-12.png",
  "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Birthday+cards/G-08.png",
  "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Birthday+cards/G-20.png",
  "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Birthday+cards/G-10.png",
  "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Birthday+cards/G-06.png",
  "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Birthday+cards/G-04.png",
  "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Birthday+cards/G-52.png",
  "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Birthday+cards/G-48.png",
  "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Birthday+cards/G-42.png",
  "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Birthday+cards/G-32.png",
  "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Birthday+cards/G-18.png"
];

const cards = urls.map((url, index) => {
  const cardNumber = 14 + index;
  return {
    ...baseData,
    name: `Birthday Card ${cardNumber}`,
    slug: `greetings-card-${cardNumber}`,
    description: `Birthday Card ${cardNumber}`,
    image: {
      id: "1",
      original: url,
      thumbnail: url,
      _id: "66c75afbbdc1efe45d9022c8"
    },
    gallery: [
      {
        _id: "66c75afbbdc1efe45d9022c9",
        id: "573",
        original: url,
        thumbnail: url
      }
    ]
  };
});

const filePath = path.join(__dirname, `birthday_cards.json`);
fs.writeFileSync(filePath, JSON.stringify(cards, null, 2), 'utf8');
console.log(`Created file: birthday_cards.json`);


*/


const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Path to your JSON file
const filePath = path.join(__dirname, `products.json`);

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  let products;

  try {
    products = JSON.parse(data);
  } catch (parseError) {
    console.error('Error parsing the JSON data:', parseError);
    return;
  }

  // Update id and _id for each main object
  products = products.map(product => {
    product.id = uuidv4(); // Generate a unique id
    product._id = uuidv4(); // Generate a unique _id
    return product;
  });

  // Write the updated data back to the JSON file
  fs.writeFile(filePath, JSON.stringify(products, null, 2), 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing the file:', writeErr);
      return;
    }

    console.log('Successfully updated the id and _id fields in the JSON file.');
  });
});
