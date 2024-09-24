import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the products from the backend
    console.log('Getting inside')
    axios.get('http://localhost:3000/product/product-details') // Make sure the backend server is running
      .then((response) => {
        setProducts(response.data); // Save the product data in state
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <div>
          <h1>Product List</h1>
          <div className="products-container">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.imgURL} alt={product.data.product_title} />
                <h3>{product.data.product_title}</h3>
                <p>Price: {product.data.product_price}</p>
              </div>
            ))}
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;