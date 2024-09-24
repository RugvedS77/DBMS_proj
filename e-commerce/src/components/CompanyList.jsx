import { useState } from "react";

const CompanyList = ({ items }) => {
  const [categoryProduct, setCategoryProduct] = useState(items);
  const [loading, setLoading] = useState(false);

  const categoryLoading = new Array(6).fill(null);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {loading
        ? categoryLoading.map((el, index) => (
            <div
              className="h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse"
              key={"categoryLoading" + index}
            ></div>
          ))
        : categoryProduct.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product?.category}
                  className="h-full object-scale-down mix-blend-multiply hover:scale-125 transition-transform"
                />
              </div>
              <p className="text-center text-sm md:text-base capitalize">
                {product?.category}
              </p>
            </div>
          ))}
    </div>
  );
};

export default CompanyList;
