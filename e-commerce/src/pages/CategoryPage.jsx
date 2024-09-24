import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const category = "Laptop";
  const { categoryName } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
        const response = await axios.get(`http://localhost:3000/product/${category}`);
        if (response.headers['content-type'].includes('application/json')) {
            if (Array.isArray(response.data)) {
                setData(response.data);
            } else {
                console.error("Unexpected data format:", response.data);
                setData([]);
            }
        } else {
            console.error("Unexpected content type:", response.headers['content-type']);
            setData([]);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
    } finally {
        setLoading(false);
    }
  };


    useEffect(() => {
        fetchData();
    }, [category]);

  return (
    <div className="product-container mx-auto p-5 bg-gray-100">
      {data.map((product, index) => (
        <div className="product bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:translate-y-[-5px] hover:shadow-2xl" key={index}>
          <img src={product.imgURL} alt={product?.data?.product_title} className="w-full h-auto object-cover border-b border-gray-300" />
          <div className="product-content p-4">
            <h2 className="text-xl font-semibold text-gray-800 truncate">{product?.product_title}</h2>
            <p className="product-price text-lg font-bold text-green-600 mb-2">{product?.product_price} </p>
            {/* <p className="text-gray-600">Brand: {product.productName}</p>
            <p className="text-gray-600">Series: {product.category_2}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryPage;
