import React, { useEffect, useRef, useState } from 'react';
import displayINRCurrency from '../helpers/displayCurrency';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HorizontalCardProduct = ({ category, heading }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const loadingList = new Array(13).fill(null);
    const [scroll, setScroll] = useState(0);
    const scrollElement = useRef();

    // Fetch products based on category
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

    const handleAddToCart = async (product) => {
        console.log("1")
        const token = localStorage.getItem('token'); // Retrieve token from local storage
        console.log({token})
        if (!token) {
          alert("Please log in to add items to your cart.");
          return;
        }
    
        try {
            const customer_id = localStorage.getItem('customer_id');

            if (!customer_id) {
                alert("Customer ID is missing. Please log in again.");
                return;
            }
            console.log("3")
           const response = await axios.post('http://localhost:3000/cart', 
            {
              customer_id,
              product_id: product.asin,
              product_name: product.data?.product_title || "unkonown" ,
              quantity: 1,
              cost: product.data.product_price || 0,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("4")
          if (response.status === 200) {
            alert("Product added to cart successfully!");
          }
        } catch (error) {
          console.error("Error adding product to cart:", error);
          alert("Failed to add product to cart.");
        }
      };

    const scrollRight = () => {
        scrollElement.current.scrollLeft += 300;
    };

    const scrollLeft = () => {
        scrollElement.current.scrollLeft -= 300;
    };

    return (
        <div className='container mx-auto px-4 my-6 relative'>
            <h2 className='text-2xl font-semibold py-4'>{heading}</h2>

            <div className='flex items-center gap-4 md:gap-6 overflow-auto scrollbar-none transition-all' ref={scrollElement}>
                <button className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' onClick={scrollLeft}>
                    <FaAngleLeft />
                </button>
                <button className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' onClick={scrollRight}>
                    <FaAngleRight />
                </button>

                {loading ? (
                    loadingList.map((_, index) => (
                        <div key={index} className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                            <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse'></div>
                            <div className='p-4 grid w-full gap-2'>
                                <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black bg-slate-200 animate-pulse p-1 rounded-full'></h2>
                                <p className='capitalize text-slate-500 p-1 bg-slate-200 animate-pulse rounded-full'></p>
                                <div className='flex gap-3 w-full'>
                                    <p className='text-red-600 font-medium p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                                    <p className='text-slate-500 line-through p-1 bg-slate-200 w-full animate-pulse rounded-full'></p>
                                </div>
                                <button className='text-sm text-white px-3 py-0.5 rounded-full w-full bg-slate-200 animate-pulse'></button>
                            </div>
                        </div>
                    ))
                ) : (
                    Array.isArray(data) && data.map((product) => (
                        <div key={product.id} className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-lg shadow flex flex-col items-center'>
                            <div className='w-full h-64 rounded-t-lg overflow-hidden'>
                                <img src={product.imgURL} alt={product?.data?.product_title} className='object-cover h-full w-full hover:scale-110 transition-all' />
                            </div>
                            <div className='p-4 w-full'>
                                <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>
                                    {product?.data?.product_title || "No title available"}
                                </h2>
                                <p className='capitalize text-slate-500'>{product?.category_name || "Unknown category"}</p>
                                <div className='flex gap-3'>
                                    <p className='text-red-600 font-medium'>
                                        {product?.data?.product_price ? `₹${product.data.product_price}` : "N/A"}
                                    </p>
                                    <p className='text-slate-500 line-through'>
                                        {product?.data?.product_original_price ? product.data.product_original_price : "N/A"}
                                    </p>
                                </div>
                                <button onClick={()=>handleAddToCart(product)} className='text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full mt-2'>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                    
                )}
            </div>
        </div>
    );
};

export default HorizontalCardProduct;
