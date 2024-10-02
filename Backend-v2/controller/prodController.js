
const fs = require('fs');
const axios = require('axios');
// const {Laptop , Shoe} = require('../schema/product');
const Product = require('../schema/product'); 
const { log } = require('console');
const { find } = require('../schema/payment');

// const cat_name = "Shoes";    // ***Change the name ***

function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}


const uploadProdData = async (req, res) => {
  try {
    const fileData = fs.readFileSync('Product_details.json', 'utf8');
    const jsonData = JSON.parse(fileData);

    // Check if the incoming data is an array
    if (!Array.isArray(jsonData)) {
      return res.status(400).send('Product data should be an array');
    }

    for (const item of jsonData) {
      // Validate the structure of each product
      if (!item.asin || !item.data || !item.product_information) {
        return res.status(400).send('Product data format is incorrect');
      }

      const existingProduct = await Product.findOneAndDelete({ asin: item.asin });
      if (existingProduct) {
        console.log(`ASIN ${item.asin} already exists. Replacing the old product with the new one.`);
      } 


      // Check if product_photo is available and defined
      const imgURL = item.data.product_photo;

      console.log('Checking Product Photo URL for ASIN:', item.asin);
      console.log('Product Photo URL:', imgURL);

      if (!imgURL || imgURL.trim() === '') {
        console.error('Product photo URL is missing for ASIN:', item.asin);
        continue;  // Skip this product
      }

      if (!isValidURL(imgURL)) {
        console.error('Invalid Product photo URL for ASIN:', item.asin);
        continue;  // Skip this product
      }

      // console.log('Image URL:', imgURL);

      // Fetch the image and convert it to base64
      try {
        const response = await axios.get(imgURL, { responseType: 'arraybuffer' });
        const imgBuffer = Buffer.from(response.data, 'binary');
        const base64EncodedImg = imgBuffer.toString('base64');       

        // Save the product data to the database
        const newProduct = new Product({ 
          category_name: item.category_name,
          asin: item.asin || 'default-asin',
          data: item.data,
          product_information: item.product_information
        });

    // Add the base64 encoded image to the product data
            newProduct.data.product_photo = base64EncodedImg;
        await newProduct.save();

        console.log('Product data and image stored successfully for ASIN:', item.asin);
      } catch (imgError) {
        console.error('Error processing image for ASIN:', item.asin, imgError);
        continue;  // Skip this product and move to the next one
      }
    }

    res.send('All valid product data and images uploaded and stored successfully!');
  } catch (error) {
    console.error('Error processing or storing product data and image:', error);
    res.status(500).send('An error occurred while uploading the product data and image');
  }
};

const getProdData_all = async(req,res)  =>{
  try {
    const prod_data = await Product.find({category_name : "Laptop"}).limit(12);
    // const shoes = await Shoe.find();         // CHANGE THE PRODUCT NAME***
    // const laptops = await Laptop.find();

    // const prod_data = [...laptops, ...shoes]
    
    const prod_with_img = prod_data.map( pData =>{

      const imgBase64 = pData.data.product_photo;
      const imgDataUrl = `data:image/jpeg;base64,${imgBase64}`;

      return{
      id : pData._id,
      category_name : pData.category_name,
      asin : pData.asin,
      data : pData.data,
      imgURL : imgDataUrl,
      product_information : pData.product_information 
      }
      
    })
    // res.status(200).render('product', {products: prod_with_img})
    res.status(200).json(prod_with_img);
  } catch (error) {
    console.error("Error occured",error)
    res.status(500).send('An error occurred while fetching product data');
  }
}

const getProdData_one = async(req,res)=>{
  const prodDetails = Shoe.findById()    // CHANGE THE PRODUCT NAME***
}

// const getProdByCategory = async(req,res)  =>{
//   try {
//     const {category} = req.params;
//     const prod_data = await Product.find({category_name : category}).limit(12);
//     // const shoes = await Shoe.find();         // CHANGE THE PRODUCT NAME***
//     // const laptops = await Laptop.find();

//     // const prod_data = [...laptops, ...shoes]
    
//     const prod_with_img = prod_data.map( pData =>{

//       const imgBase64 = pData.data.product_photo;
//       const imgDataUrl = `data:image/jpeg;base64,${imgBase64}`;
//       // const product_photo = `data:image/jpeg;base64,${imgBase64}`;

//       return{
//       id : pData._id,
//       category_name : pData.category_name,
//       asin : pData.asin,
//       data : pData.data,
//       imgURL : imgDataUrl,
//       product_information : pData.product_information 
//       }
      
//     })
//     // res.status(200).render('product', {products: prod_with_img})
//     res.status(200).json(prod_with_img);
//   } catch (error) {
//     console.error("Error occured",error)
//     res.status(500).send('An error occurred while fetching product data');
//   }
// }

const getProdByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { all } = req.query; // Check for 'all' query parameter

    let prod_data;
    if (all === 'true') {
      prod_data = await Product.find({ category_name: category }); // Fetch all products
    } else {
      const limit = parseInt(req.query.limit) || 12; // Default limit is 12 if not specified
      prod_data = await Product.find({ category_name: category }).limit(limit);
    }

    const prod_with_img = prod_data.map(pData => {
      const imgBase64 = pData.data.product_photo;
      const imgDataUrl = `data:image/jpeg;base64,${imgBase64}`;

      return {
        id: pData._id,
        category_name: pData.category_name,
        asin: pData.asin,
        data: pData.data,
        imgURL: imgDataUrl,
        product_information: pData.product_information
      };
    });

    res.status(200).json(prod_with_img);
  } catch (error) {
    console.error("Error occurred", error);
    res.status(500).send('An error occurred while fetching product data');
  }
};

const getProdDetail = async (req, res) => {
  try {
    const {asin} = req.params;

    let details = await Product(find({asin: asin}));

    const prod_with_img = details.map(pData => {
      const imgBase64 = pData.data.product_photo;
      const imgDataUrl = `data:image/jpeg;base64,${imgBase64}`;

      return {
        id: pData._id,
        category_name: pData.category_name,
        asin: pData.asin,
        data: pData.data,
        imgURL: imgDataUrl,
        product_information: pData.product_information
      };
    });

    res.status(200).json(prod_with_img);
  } catch (error) {
    console.log('Error geting details: ',error);
    res.status(500).send(`An error occurred while fetching ${asin}'s data`);
  }
}

module.exports = { uploadProdData, getProdData_all, getProdData_one, getProdByCategory, getProdDetail };
