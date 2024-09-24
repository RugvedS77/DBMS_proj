require('dotenv').config();

const axios = require('axios');
const fs = require('fs');

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const cat_name = "Laptop"

// Function to get product details including the description
async function getProductDetails(asin) {
    const options = {
        method: 'GET',
        url: 'https://real-time-amazon-data.p.rapidapi.com/product-details',
        params: {
            asin: asin,
            country: 'IN'
        },
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(`Error fetching details for ASIN ${asin}:`, error.message);
        return null;
    }
}

// Function to fetch details for all ASINs and save them to a file
async function fetchAndSaveProductDetails() {
    const productsWithDetails = [];

    try{

        const data = fs.readFileSync('asins.json','utf-8');
        const asins = JSON.parse(data)

            for (const asin of asins) {
            const details = await getProductDetails(asin);

            if (details && details.data) {
                // Extract only the required fields
                const extractedData = {
                    category_name: cat_name,
                    asin: details.data.asin,
                    data: {
                        product_title: details.data.product_title,
                        product_price: details.data.product_price,
                        product_original_price: details.data.product_original_price,
                        currency: details.data.currency,
                        product_star_rating: details.data.product_star_rating,
                        product_photo: details.data.product_photo,
                        sales_volume: details.data.sales_volume,
                        about_product: details.data.about_product
                    },
                    // product_information: details.data.product_details,
                    product_information: details.data.product_information,
                    //product_photos: details.data.product_photos
                };

                productsWithDetails.push(extractedData);
            }
            await delay(1000); // Adjust the delay
        }

        fs.writeFile('Product_details.json', JSON.stringify(productsWithDetails, null, 2), (err) => {
            if (err) throw err;
            console.log('Data with product details has been saved as Product_details.json');
        });
    }
    catch(err){
        console.error(err);
    }
    
}

fetchAndSaveProductDetails();
