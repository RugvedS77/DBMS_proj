import React, { useState } from 'react'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import CompanyList from '../components/CompanyList'
import ImageContainer from '../components/ImageContainer'
import ProductList from '../components/ProductList'
import SideBar from '../components/SideBar'

const Home = () => {

    const items = [
    {
        id: '01',
        image: 'Images/3.jpg',
        category: 'Keyboard',
        productImage: 'Home_Images/1.jpg',
        productName: 'Boat',
        sellingPrice: 1000,
        price: 699,
        category_2: 'airpodes',
    },
    {
        id: '02',
        image: 'Images/3.jpg',
        category: 'Mouse',
        productImage: 'Home_Images/2.jpg',
        productName: 'Boat',
        sellingPrice: 1000,
        price: 699,
        category_2: 'airpodes',
    },
    {
        id: '03',
        image: 'Images/3.jpg',
        category: 'Laptop',
        productImage: 'Home_Images/3.jpg',
        productName: 'Boat',
        sellingPrice: 1000,
        price: 699,
        category_2: 'airpodes',
    },
    {
        id: '04',
        image: 'Images/3.jpg',
        category: 'Bag',
        productImage: 'Home_Images/4.jpg',
        productName: 'Boat',
        sellingPrice: 1000,
        price: 699,
        category_2: 'airpodes',
    },
    {
        id: '05',
        image: 'Images/3.jpg',
        category: 'Pencil',
        productImage: 'Home_Images/5.jpg',
        productName: 'Boat',
        sellingPrice: 1000,
        price: 699,
        category_2: 'airpodes',
    },
    {
        id: '06',
        image: 'Images/3.jpg',
        category: 'Eraser',
        productImage: 'Home_Images/6.jpg',
        productName: 'Boat',
        sellingPrice: 1000,
        price: 699,
        category_2: 'airpodes',
    },
    {
        id: '07',
        image: 'Images/3.jpg',
        category: 'Pouch',
        productImage: 'Home_Images/7.jpg',
        productName: 'Boat',
        sellingPrice: 1000,
        price: 699,
        category_2: 'airpodes',
    },
    {
        id: '08',
        image: 'Images/3.jpg',
        category: 'Pen',
        productImage: 'Home_Images/8.jpg',
        productName: 'Boat',
        sellingPrice: 1000,
        price: 699,
        category_2: 'airpodes',
    },
    {
        id: '09',
        image: 'Images/3.jpg',
        category: 'Scale',
        productImage: 'Home_Images/9.jpg',
        productName: 'Boat',
        sellingPrice: 1000,
        price: 699,
        category_2: 'airpodes',
    },
    {
        id: '10',
        image: 'Images/3.jpg',
        category: 'Books',
        productImage: 'Home_Images/10.jpg',
        productName: 'Boat',
        sellingPrice: 1000,
        price: 699,
        category_2: 'airpodes',
    },
    {
        id: '11',
        image: 'Images/3.jpg',
        category: 'Dress',
        productImage: 'Home_Images/11.jpg',
        productName: 'Boat',
        sellingPrice: 1000,
        price: 699,
        category_2: 'airpodes',
    },
    {
        id: '12',
        image: 'Images/3.jpg',
        category: 'kite',
        productImage: 'Home_Images/12.jpg',
        productName: 'Boat',
        sellingPrice: 1000,
        price: 699,
        category_2: 'airpodes',
    },
    {
        id: '13',
        image: 'Images/3.jpg',
        category: 'board',
        productImage: 'Home_Images/13.jpg',
        productName: 'Boat',
        sellingPrice: 1000,
        price: 699,
        category_2: 'airpodes',
    }
    ]
    
    return (
        
        <div className="py-20"> {/* Container with padding for top/bottom and side */}
            <hr /><hr />
            <BannerProduct />
            <div className="my-10"> {/* Adds margin to space out components */}
                <HorizontalCardProduct category={"Laptop"} heading={"Top Trend"} items={items}></HorizontalCardProduct>
            </div>
            <div className="my-0">
                <HorizontalCardProduct category={"Airbuds"} heading={"Another Trend"} items={items}></HorizontalCardProduct>
            </div>
            <div className="my-0">
                <HorizontalCardProduct category={"Shoes"} heading={"Another Trend"} items={items}></HorizontalCardProduct>
            </div>
            <div className="my-0">
                <CompanyList items={items}></CompanyList>
            </div>
            <div className="my-10">
                <ImageContainer ></ImageContainer>
            </div>
        </div>
    )
}

export default Home