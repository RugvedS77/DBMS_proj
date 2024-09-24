require("dotenv").config();

const axios = require('axios');
const fs = require('fs');

const options = {
  method: 'GET',
  url: 'https://real-time-amazon-data.p.rapidapi.com/search',
  params: {
    query: 'mouse',
    page: '1',
    country: 'IN',
    sort_by: 'RELEVANCE',
    product_condition: 'NEW',
    // brand: 'Acer',
    is_prime: 'false'
  },
  headers: {
    'x-rapidapi-key': process.env.RAPIDAPI_KEY,
    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
  }
};

async function fetchAndStoreAsins() {
  try {
    const response = await axios.request(options);
    const products = response.data.data.products;

    if (Array.isArray(products)) {
      const asins = products
        .map(product => product.asin)
        .filter(asin => asin !== null && asin !== undefined);

      fs.writeFile('asins.json', JSON.stringify(asins, null, 2), (err) => {
        if (err) throw err;
        console.log('ASINs have been saved to asins.json');
      });
    } else {
      console.error('No products found or data is not in the expected format.');
    }
  } catch (error) {
    console.error('Error fetching product details:', error.message);
  }
}

fetchAndStoreAsins();
