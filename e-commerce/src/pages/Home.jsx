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

const items2 = {
    "asin": "B09R1MMMTH",
    "data": {
      "product_title": "HP Laptop 15s, AMD Ryzen 3 5300U, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, AMD Radeon Graphics, Thin & Light, Dual Speakers (Win 11, MSO 2019, Silver, 1.69 kg), eq2143AU",
      "product_price": 699,
      "product_original_price": 999,
      "currency": "INR",
      "product_photo": "https://m.media-amazon.com/images/I/71-oBEGEnOL._SL1500_.jpg",
      "sales_volume": 125,
      "about_product": [
        "【4-core AMD Ryzen 3 5300U】8 threads and 4MB L3 cache deliver powerful performance and swift responsiveness. The AMD Radeon graphics help you experience crisp visuals with vivid clarity.",
        "【Upgraded memory and storage】8GB DDR4 RAM integrates a higher-bandwidth memory for smooth functioning. The high-speed 512GB PCIe NVMe M.2 SSD creates more room to work with ample of storage.",
        "【Micro-edge display】The 15.6-inch, FHD, 250-nit, anti-glare, and micro-edge display is engineered for high-quality viewing with stunning clarity.",
        "【Effortless connectivity】Wi-Fi 5 (1x1) and Bluetooth 4.2 ensure an uninterrupted and seamless experience. Enjoy effortless connectivity with 1 x USB Type-C, 2 x USB Type-A, and 1 x HDMI 1.4b ports.",
        "【Long battery life】Fast charge your battery from 0% to 50% in 45 mins. The durable 41Wh battery enables you to maximize productivity and work through tasks without interruption.",
        "【Business conferencing】HP True Vision 720p HD camera with integrated dual array mics, and dual speakers deliver a high-resolution, crystal-clear collaboration experience.",
        "【Why HP】Experience the unparalleled advantages of choosing HP, the most preferred and trusted PC brand by Indians, which empowers you with cutting-edge technology and steadfast dependability.",
        "【Pre-loaded Win 11 and MS Office】Comes with Win 11 and MS Office 2021. To activate your MS Office, sign in/up, follow the Office Activation Wizard",
        "【Sustainably made】Make an environmentally conscious choice with a thoughtfully designed laptop that contains recycled plastics and is EPEAT Silver registered and ENERGY STAR certified.",
        "【Reliable design】A sleek yet sturdy laptop that delivers rock-solid performance all day long with power-packed features, optimized heat management, and 1-year on-site standard warranty."
      ]
    },
    "product_information": {
      "Brand": "HP",
      "Manufacturer": "HP",
      "Series": "HP Laptop",
      "Colour": "Natural Silver",
      "Form Factor": "Laptop",
      "Item Height": "18 Millimeters",
      "Item Width": "24.2 Centimeters",
      "Standing screen display size": "15.6 Inches",
      "Screen Resolution": "1920 x 1080 pixels",
      "Resolution": "1920 X 1080 (FHD) Pixels",
      "Product Dimensions": "35.9 x 24.2 x 1.8 cm; 1.69 kg",
      "Batteries": "1 Lithium Ion batteries required. (included)",
      "Item model number": "eq2143AU",
      "Processor Brand": "AMD",
      "Processor Type": "Ryzen 3",
      "Processor Speed": "3.8 GHz",
      "Processor Count": "1",
      "RAM Size": "8 GB",
      "Memory Technology": "DDR4",
      "Computer Memory Type": "DDR4 SDRAM",
      "Maximum Memory Supported": "16 GB",
      "Memory Clock Speed": "3200 MHz",
      "Hard Drive Size": "512 GB",
      "Hard Disk Description": "SSD",
      "Audio Details": "Speakers",
      "Speaker Description": "Dual speakers",
      "Graphics Coprocessor": "AMD Radeon Graphics",
      "Graphics Chipset Brand": "AMD",
      "Graphics Card Description": "Integrated",
      "Graphics RAM Type": "VRAM",
      "Graphics Card Ram Size": "8 GB",
      "Graphics Card Interface": "Integrated",
      "Connectivity Type": "Bluetooth, Wi-Fi",
      "Wireless Type": "802.11a/b/g/n/ac, Bluetooth",
      "Number of USB 3.0 Ports": "2",
      "Number of HDMI Ports": "1",
      "Voltage": "3.6 Volts",
      "Optical Drive Type": "No Optical Drive",
      "Power Source": "Battery Powered",
      "Hardware Platform": "PC",
      "Operating System": "Windows 11 Home",
      "Average Battery Life (in hours)": "9 Hours",
      "Are Batteries Included": "Yes",
      "Lithium Battery Energy Content": "41 Watt Hours",
      "Number of Lithium Ion Cells": "3",
      "Included Components": "laptop, charger, warranty card",
      "Item Weight": "1 kg 690 g",
      "ASIN": "B09R1MMMTH",
      "Best Sellers Rank": "#293 in Computers & Accessories (See Top 100 in Computers & Accessories)   #1 in Traditional Laptops",
      "Date First Available": "24 January 2022",
      "Packer": "SG66 – QUANTA CQ Tech-Front (CHongqing) computer CO.,LTD 18#, comprehensive bonded zone avenue, Shapingba District 401332 Chongqing China",
      "Importer": "HP India Sales pvt limited, 24 kothari Arena, Hosur main road, Adugodi , Bangalore -560030.",
      "Item Dimensions LxWxH": "35.9 x 24.2 x 1.8 Centimeters",
      "Net Quantity": "1 Pack",
      "Generic Name": "Laptop"
    },
    "product_photos": [
      "https://m.media-amazon.com/images/I/71-oBEGEnOL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71RCOuDU5fL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/716yR0T86iL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81txq9GdORL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81JxSlH7iGL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71ogkzaA5jL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81EYWncWugL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71-kOZB7feL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81JyDFlHRrL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81WbQF-7fiL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81tm3HiVvlL._SL1500_.jpg"
    ]
  }
    
    return (
        <div>
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr />
            <BannerProduct/>
            <HorizontalCardProduct category={"Laptop"} heading={"Top Trend"} items={items}></HorizontalCardProduct>
            <HorizontalCardProduct category={"Shoes"} heading={"Another Trend"} items={items}></HorizontalCardProduct>
            <HorizontalCardProduct category={"Mouse"} heading={"Another Trend"} items={items}></HorizontalCardProduct>
            <CompanyList items={items}></CompanyList>
            <ImageContainer items={items2}></ImageContainer>
            {/* <SideBar items={items}  isVisible={isSidebarVisible} onClose={hideSidebar} ></SideBar> */}
            {/* <ProductList></ProductList> */}
        </div>
    )
}

export default Home