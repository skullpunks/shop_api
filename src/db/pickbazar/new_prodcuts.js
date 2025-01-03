const fs = require('fs');

// Base object template
const baseObject =
{
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
                    "_id": "66c75afcbdc1efe45d90234e",
                    "url": "https://www.facebook.com/",
                    "icon": "FacebookIcon"
                },
                {
                    "_id": "66c75afcbdc1efe45d90234f",
                    "url": "https://www.instagram.com/",
                    "icon": "InstagramIcon"
                },
                {
                    "_id": "66c75afcbdc1efe45d902350",
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
            "_id": "66c75afcbdc1efe45d90234c"
        },
        "logo": {
            "id": "893",
            "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
            "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg",
            "_id": "66c75afcbdc1efe45d90234d"
        },
        "is_active": 1,
        "created_at": "2021-06-27T03:48:23.000Z",
        "updated_at": "2021-07-08T09:22:38.000Z"
    },
    "_id": "d48fe0f5-481c-4cb7-b41e-4a761d060228",
    "id": "d197b20d-42c5-468c-a922-6ac1dc96b326",
    "name": "Greeting Card 2",
    "slug": "greetings-card-gc-2",
    "description": "Our Indexx Greeting Cards are a perfect gift for any occasion. When traditional gift ideas fall short, why not surprise someone with the gift of cryptocurrency? This modern and thoughtful option allows you to send crypto in a beautifully designed greeting card, making it an ideal present for the tech-savvy recipient.",
    "type_id": 1,
    "price": 2,
    "shop_id": 6,
    "sale_price": 1000,
    "language": "en",
    "min_price": 50,
    "max_price": 10000,
    "sku": "1",
    "quantity": 18,
    "in_stock": 1,
    "is_taxable": 0,
    "shipping_class_id": null,
    "status": "publish",
    "product_type": "variable",
    "unit": "1lb",
    "height": null,
    "width": null,
    "length": null,
    "image": {
        "id": "1",
        "original": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Greeting+Cards/G-22.png",
        "thumbnail": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Greeting+Cards/G-22.png",
        "_id": "66c75afcbdc1efe45d902346"
    },
    "video": null,
    "gallery": [
        {
            "_id": "66c75afcbdc1efe45d902347",
            "id": "573",
            "original": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Greeting+Cards/G-22.png",
            "thumbnail": "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Greeting+Cards/G-22.png"
        }
    ],
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
    "rating_count": [
        {
            "_id": "66c75afcbdc1efe45d902348",
            "rating": 5,
            "total": 2,
            "positive_feedbacks_count": 0,
            "negative_feedbacks_count": 0,
            "my_feedback": null,
            "abusive_reports_count": 0
        },
        {
            "_id": "66c75afcbdc1efe45d902349",
            "rating": 4,
            "total": 1,
            "positive_feedbacks_count": 0,
            "negative_feedbacks_count": 0,
            "my_feedback": null,
            "abusive_reports_count": 0
        }
    ],
    "my_review": null,
    "in_wishlist": false,
    "blocked_dates": [],
    "translated_languages": [
        "en"
    ],
    "categories": [
        {
            "type": null,
            "children": [],
            "products_count": 0,
            "_id": "66c75afcbdc1efe45d90234a",
            "id": 1,
            "name": "Greeting",
            "slug": "Greeting",
            "icon": "Greeting",
            "language": "en",
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 1,
            "created_at": "2021-03-08T07:21:31.000Z",
            "updated_at": "2021-03-08T07:21:31.000Z",
            "deleted_at": null,
            "parent_id": null,
            "translated_languages": [
                "en"
            ],
            "pivot": {
                "product_id": 1,
                "category_id": 1
            }
        },
        {
            "type": null,
            "children": [],
            "products_count": 0,
            "_id": "66c75afcbdc1efe45d90234b",
            "id": 2,
            "name": "Greeting Cards",
            "slug": "greeting-cards",
            "icon": "GreetingCards",
            "language": "en",
            "image": [],
            "details": null,
            "type_id": 1,
            "created_at": "2021-03-08T07:22:04.000Z",
            "updated_at": "2021-03-08T07:22:04.000Z",
            "deleted_at": null,
            "parent_id": 1,
            "translated_languages": [
                "en"
            ],
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
            "_id": "66c75afcbdc1efe45d902351"
        },
        "slug": "grocery",
        "language": "en",
        "icon": "FruitsVegetable",
        "promotional_sliders": [
            {
                "_id": "66c75afcbdc1efe45d902352",
                "id": "902",
                "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/offer-5.png",
                "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/conversions/offer-5-thumbnail.jpg"
            },
            {
                "_id": "66c75afcbdc1efe45d902353",
                "id": "903",
                "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/903/offer-4.png",
                "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/903/conversions/offer-4-thumbnail.jpg"
            },
            {
                "_id": "66c75afcbdc1efe45d902354",
                "id": "904",
                "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/offer-3.png",
                "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/conversions/offer-3-thumbnail.jpg"
            },
            {
                "_id": "66c75afcbdc1efe45d902355",
                "id": "905",
                "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/offer-2.png",
                "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/conversions/offer-2-thumbnail.jpg"
            },
            {
                "_id": "66c75afcbdc1efe45d902356",
                "id": "906",
                "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/offer-1.png",
                "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/conversions/offer-1-thumbnail.jpg"
            }
        ],
        "created_at": "2021-03-08T07:18:25.000Z",
        "updated_at": "2021-09-26T15:23:32.000Z",
        "translated_languages": [
            "en"
        ],
        "_id": "66c75afcbdc1efe45d902357"
    },
    "variations": [
        {
            "id": 50,
            "attribute_id": 3,
            "value": "50",
            "attribute": {
                "id": 3,
                "slug": "available-in",
                "name": "Available In",
                "values": [
                    {
                        "id": 8,
                        "attribute_id": 3,
                        "value": "12oz"
                    },
                    {
                        "id": 9,
                        "attribute_id": 3,
                        "value": "24oz"
                    },
                    {
                        "id": 10,
                        "attribute_id": 3,
                        "value": "36oz"
                    }
                ]
            }
        },
        {
            "id": 100,
            "attribute_id": 3,
            "value": "100",
            "attribute": {
                "id": 3,
                "slug": "available-in",
                "name": "Available In",
                "values": [
                    {
                        "id": 8,
                        "attribute_id": 3,
                        "value": "12oz"
                    },
                    {
                        "id": 9,
                        "attribute_id": 3,
                        "value": "24oz"
                    },
                    {
                        "id": 10,
                        "attribute_id": 3,
                        "value": "36oz"
                    }
                ]
            }
        },
        {
            "id": 300,
            "attribute_id": 3,
            "value": "300",
            "attribute": {
                "id": 3,
                "slug": "available-in",
                "name": "Available In",
                "values": [
                    {
                        "id": 8,
                        "attribute_id": 3,
                        "value": "12oz"
                    },
                    {
                        "id": 9,
                        "attribute_id": 3,
                        "value": "24oz"
                    },
                    {
                        "id": 10,
                        "attribute_id": 3,
                        "value": "36oz"
                    }
                ]
            }
        },
        {
            "id": 500,
            "attribute_id": 3,
            "value": "500",
            "attribute": {
                "id": 3,
                "slug": "available-in",
                "name": "Available In",
                "values": [
                    {
                        "id": 8,
                        "attribute_id": 3,
                        "value": "12oz"
                    },
                    {
                        "id": 9,
                        "attribute_id": 3,
                        "value": "24oz"
                    },
                    {
                        "id": 10,
                        "attribute_id": 3,
                        "value": "36oz"
                    }
                ]
            }
        },
        {
            "id": 1000,
            "attribute_id": 3,
            "value": "1000",
            "attribute": {
                "id": 3,
                "slug": "available-in",
                "name": "Available In",
                "values": [
                    {
                        "id": 8,
                        "attribute_id": 3,
                        "value": "12oz"
                    },
                    {
                        "id": 9,
                        "attribute_id": 3,
                        "value": "24oz"
                    },
                    {
                        "id": 10,
                        "attribute_id": 3,
                        "value": "36oz"
                    }
                ]
            }
        },
        {
            "id": 2000,
            "attribute_id": 3,
            "value": "2000",
            "attribute": {
                "id": 3,
                "slug": "available-in",
                "name": "Available In",
                "values": [
                    {
                        "id": 8,
                        "attribute_id": 3,
                        "value": "12oz"
                    },
                    {
                        "id": 9,
                        "attribute_id": 3,
                        "value": "24oz"
                    },
                    {
                        "id": 10,
                        "attribute_id": 3,
                        "value": "36oz"
                    }
                ]
            }
        },
        {
            "id": 4000,
            "attribute_id": 3,
            "value": "4000",
            "attribute": {
                "id": 3,
                "slug": "available-in",
                "name": "Available In",
                "values": [
                    {
                        "id": 8,
                        "attribute_id": 3,
                        "value": "12oz"
                    },
                    {
                        "id": 9,
                        "attribute_id": 3,
                        "value": "24oz"
                    },
                    {
                        "id": 10,
                        "attribute_id": 3,
                        "value": "36oz"
                    }
                ]
            }
        },
        {
            "id": 10000,
            "attribute_id": 3,
            "value": "10000",
            "attribute": {
                "id": 3,
                "slug": "available-in",
                "name": "Available In",
                "values": [
                    {
                        "id": 8,
                        "attribute_id": 3,
                        "value": "12oz"
                    },
                    {
                        "id": 9,
                        "attribute_id": 3,
                        "value": "24oz"
                    },
                    {
                        "id": 10,
                        "attribute_id": 3,
                        "value": "36oz"
                    }
                ]
            }
        }
    ],
    "metas": [],
    "manufacturer": null,
    "variation_options": [],
    "tags": [],
    "author": null
};

// URLs for new images
const imageUrls = [
    "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Greeting+Cards/greet+01.png",
    "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Greeting+Cards/greet+02.png",
    "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Greeting+Cards/greet+03.png",
    "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Greeting+Cards/greet+04.png",
    "https://indexx-exchange.s3.ap-northeast-1.amazonaws.com/indexx-shop/Greeting/Greeting+Cards/greet+05.png"
];

// Function to generate new JSON objects
function createObjects(base, imageUrls) {
    return imageUrls.map((url, index) => {
        let i = 3;
        const newId = `d197b20d-42c5-468c-a922-6ac1dc96b32${index + 7}`;
        const newObject = { ...base };
        newObject.id = newId;
        newObject._id = newId;
        newObject.image.original = url;
        newObject.image.thumbnail = url;
        newObject.gallery[0].original = url;
        newObject.gallery[0].thumbnail = url;
        newObject.name = `Greeting Card ${i + 1}`;
        newObject.slug = `greetings-card-gc-${i + 1}`;
        i = i + 1;
        return newObject;
    });
}

// Create new objects and save to file
const newObjects = createObjects(baseObject, imageUrls);
fs.writeFileSync('new_greeting_cards.json', JSON.stringify(newObjects, null, 2));

console.log("Greeting card JSON objects created successfully.");
