import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideBar = ({ items, isVisible, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(items);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate(`/product/${category}`);
        onClose(); // Close the sidebar after navigation
    };

    return (
        <>
            {loading ? (
                <div>Will load...</div>
            ) : (
                isVisible && (
                    <div className="fixed top-16 left-0 w-[300px] h-full bg-black shadow-lg transition-all duration-300 z-20">
                        <div className="p-4 bg-cyan-500 text-white font-bold text-center">
                            Categories
                            <button onClick={onClose} className="absolute top-2 right-2 text-white">X</button>
                        </div>
                        <div className="p-4 grid grid-cols-2 gap-2 justify-items-center">
                            {data.map((product) => (
                                <div key={product.id} className="flex flex-col items-center cursor-pointer" onClick={() => handleCategoryClick(product.category)}>
                                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">
                                        <img src={product.productImage} alt={product.category} className="w-10 h-10 object-cover" />
                                    </div>
                                    <p className="text-center text-xs mt-1 text-white">{product.category}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            )}
        </>
    );
}

export default SideBar;
