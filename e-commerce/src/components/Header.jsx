import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts, FaBagShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CgSearch } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillClipboard2HeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import categoryImg from '../assets/Images/category.jpg'


const Header = ( { toggleSidebar }) => {

    const navigate = useNavigate()
    const placeholders = ["Search books", "Search mobiles", "Search laptops", "Search accessories"];
    const [placeholder, setPlaceholder] = useState(placeholders[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholder(prev => {
                const currentIndex = placeholders.indexOf(prev);
                const nextIndex = (currentIndex + 1) % placeholders.length;
                return placeholders[nextIndex];
            });
        }, 3000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
  

  return (
    <header class="flex items-center justify-between p-4 bg-gradient-to-br from-teal-300 to-cyan-500 shadow fixed top-0 w-full z-10 h-15 ">
        {/* Logo Container */}
        <div class="logo_container">
            <a href="#">
                {/* <img class="h-12" src="logo.png" alt="MORS Home">  */}
                <a href="#" class="text-black text-2xl font-bold font-mono tracking-wide h-10 w-10"> MORS </a>
            </a>
        </div>
    
        {/* Search Bar */}
        <div className="flex items-center bg-gray-200 hover:bg-gray-300 transition-all duration-300 rounded-full px-4 py-2 w-full max-w-lg shadow-sm">
            <CgSearch />
            <input 
                className="bg-transparent focus:outline-none ml-3 w-full placeholder-gray-500" 
                type="text" 
                placeholder={placeholder} 
            />
        </div>
    
        {/* Action Bar */}
        <div class="flex items-center space-x-8">

            <div class="flex flex-col items-center text-gray-600 hover:text-black transition duration-200 cursor-pointer ">
                <img src={categoryImg} alt="Profile Icon" class="h-10 w-10 md:h-10 md:w-10" onClick={toggleSidebar}/> 
            </div>

            {/* Profile (Icon only) */}
            <div class="flex flex-col items-center text-gray-600 hover:text-black transition duration-200 cursor-pointer ">
                <CgProfile class="h-10 w-10 md:h-10 md:w-10"/>   
                {/* <img src="profile.png" alt="Profile Icon" class="h-10 w-10 md:h-10 md:w-10"/>  */}
            </div>
    
            {/* Wishlist  */}
            <div class="flex flex-col items-center text-gray-600 hover:text-black transition duration-200 cursor-pointer ">
                <BsFillClipboard2HeartFill class="h-7 w-7 md:h-10 md:w-10"/>
                {/* <img src="../Images/wishList.jpg" alt="fav wishlist" class="h-10 w-10 md:h-10 md:w-10 rounded-3xl"/> */}
            </div>
    
            {/* Cart (Icon only)  */}
            <a class="relative flex flex-col items-center text-gray-600 hover:text-black transition duration-200 cursor-pointer">
                <FaShoppingCart onClick={() => navigate('/cart')} class="h-10 w-10 md:h-10 md:w-10"/>
                {/* <img src="cart.png" alt="Cart Icon" class="h-10 w-10 md:h-10 md:w-10"/> */}
                <span class="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1">3</span>
            </a>
    
             
        </div>
    </header>
  );
};

export default Header;