import React, { useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import axios from 'axios';
import TextComponent from '../helpers/TextComponent'
import { useNavigate } from 'react-router-dom';


const HorizontalCardProduct = ({ category, heading }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const loadingList = new Array(4).fill(null);
    const scrollElement = useRef();
    const navigate = useNavigate();

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

    // Scroll functions
    const scrollRight = () => {
        const widthToScroll = scrollElement.current.clientWidth;
        scrollElement.current.scrollLeft += widthToScroll;
    };

    const handleAddToCart = async (product,event) => {
        console.log("1")
        const token = localStorage.getItem('token'); // Retrieve token from local storage
        console.log({token})
        event.stopPropagation();
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


    const scrollLeft = () => {
        const widthToScroll = scrollElement.current.clientWidth;
        scrollElement.current.scrollLeft -= widthToScroll;
    };

    // const TextComponent = ({text = ''}) => {
    //     const truncatedText = (text.split(','))[0];
    //     return truncatedText;
    // }

    const handleNavigation = (productId) => {
        navigate('/product_page')
    };

    return (
        <div className='container mx-auto px-4 my-6 relative'>
            <h2 className='text-2xl font-bold text-gray-800 py-4'>{heading}</h2>

            <div className='relative'>
                {/* Left scroll button */}
                <button
                    className='absolute top-1/2 left-[-40px] transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 shadow-lg rounded-full p-3 text-lg z-10'
                    onClick={scrollLeft}
                >
                    <FaAngleLeft />
                </button>

                {/* Right scroll button */}
                <button
                    className='absolute top-1/2 right-[-40px] transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 shadow-lg rounded-full p-3 text-lg z-10'
                    onClick={scrollRight}
                >
                    <FaAngleRight />
                </button>

                {/* Product List */}
                <div
                    className='flex items-center gap-6 overflow-x-auto scrollbar-none transition-all'
                    ref={scrollElement}
                    style={{ scrollBehavior: 'smooth' }}
                >
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
                            <div
                                key={product.id}
                                className='bg-white rounded-lg shadow-lg flex-shrink-0 min-w-[350px] max-w-[350px]'

                                onClick={() => handleNavigation(product.id)}
                            >
                                <div className='w-full h-48 rounded-t-lg overflow-hidden relative group'>
                                    <img
                                        src={product.imgURL}
                                        alt={product?.data?.product_title}
                                        className='object-cover h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-105'
                                    />
                                    <span className='absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded'>
                                        50% OFF
                                    </span>
                                </div>
                                <div className='p-3'>
                                <h2 className='font-semibold text-base text-gray-900 line-clamp-1 mb-1'>
                                    {product?.data?.product_title ? (
                                        <TextComponent text={product.data.product_title} />
                                    ) : (
                                        'No title available'
                                    )}
                                </h2>
                                    <p className='text-sm text-gray-500 mb-4'>
                                        {product?.category_name || 'Unknown category'}
                                    </p>

                                    <div className='flex items-center justify-between mb-2'>
                                        <p className='text-red-600 font-bold text-lg'>
                                            {product?.data?.product_price ? `₹${product.data.product_price}` : 'N/A'}
                                        </p>
                                        <p className='text-gray-400 line-through'>
                                            {product?.data?.product_original_price
                                                ? `${product.data.product_original_price}`
                                                : 'N/A'}
                                        </p>
                                    </div>

                                    <button onClick={(event)=>handleAddToCart(product,event)} className='w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-2 rounded-md transition-colors'>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default HorizontalCardProduct;