import React from 'react';

const CategoryPage = ({ items }) => {
  return (
    <div className="product-container mx-auto p-5 bg-gray-100">
      {items.map((product, index) => (
        <div className="product bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:translate-y-[-5px] hover:shadow-2xl" key={index}>
          <img src={product.image} alt={product.id} className="w-full h-auto object-cover border-b border-gray-300" />
          <div className="product-content p-4">
            <h2 className="text-xl font-semibold text-gray-800 truncate">{product.productName}</h2>
            <p className="product-price text-lg font-bold text-green-600 mb-2">{product.sellingPrice} </p>
            <p className="text-gray-600">Brand: {product.productName}</p>
            <p className="text-gray-600">Series: {product.category_2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
