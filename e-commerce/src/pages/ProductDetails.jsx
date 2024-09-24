import { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import displayINRCurrency from '../helpers/displayCurrency';

const ProductDetails = ({ items2 }) => {
  const [data, setData] = useState(items2);
  const [loading, setLoading] = useState(false);
  const [activeImage, setActiveImage] = useState(data.product_photos[0]);

  const productImagelistLoading = new Array(4).fill(null);

  return (
    <div className='container mx-auto p-4 flex'>
      <div className='lg:w-1/2 flex flex-col gap-4 sticky top-0'>
        {loading ? (
          <div className='flex flex-col gap-2 overflow-scroll scrollbar-none h-full'>
            {productImagelistLoading.map((el, index) => (
              <div className='h-20 w-20 bg-slate-200 rounded animate-pulse' key={"loadingImage" + index}></div>
            ))}
          </div>
        ) : (
          <div className="flex items-start">
            <div className="flex flex-col gap-2">
              {data?.product_photos.map((product, index) => (
                <div
                  key={index}
                  className={`h-20 w-20 bg-slate-200 rounded p-1 cursor-pointer ${activeImage === product ? 'border-2 border-red-600' : ''}`}
                  onClick={() => setActiveImage(product)}
                >
                  <img src={product} className='w-full h-full object-scale-down mix-blend-multiply' alt={`Product ${index}`} />
                </div>
              ))}
            </div>
            <div className="ml-4">
              <img src={activeImage} className="w-full max-w-md rounded-lg" alt="Active Product" />
            </div>
          </div>
        )}
      </div>

      <div className="lg:w-1/2 flex-1 p-4">
        {loading ? (
          <div>Data is loading</div>
        ) : (
          <div className='flex flex-col gap-1'>
            <p className='bg-red-200 text-red-600 px-2 rounded-full inline-block w-fit'>{data?.productName}</p>
            <h2 className='text-2xl lg:text-4xl font-medium'>{data?.data.product_title}</h2>

            <div className='text-red-600 flex items-center gap-1'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>

            <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1'>
              <p className='text-red-600'>{displayINRCurrency(data.data.product_price)}</p>
              <p className='text-slate-400 line-through'>{displayINRCurrency(data.data.product_original_price)}</p>
            </div>

            <div className='flex items-center gap-3 my-2'>
              <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white'>Buy</button>
              <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-red-600 hover:text-red-600 hover:bg-white'>Add To Cart</button>
            </div>

            <div>
              <p className='text-slate-600 font-medium my-1'>Description:</p>
              <div className='bg-gray-100 p-4 rounded-lg'>
                {data?.data.about_product.map((detail, index) => (
                  <p key={index} className="mt-2 text-gray-700">{detail}</p>
                ))}
              </div>
            </div>

            <div className='mt-4'>
              <p className='text-slate-600 font-medium my-1'>Product Information:</p>
              <table className='min-w-full bg-white border border-gray-200'>
                <tbody>
                  {Object.entries(data.product_information).map(([key, value], index) => (
                    <tr key={index} className='border-b'>
                      <td className='px-4 py-2 font-medium text-gray-700'>{key}</td>
                      <td className='px-4 py-2 text-gray-700'>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
