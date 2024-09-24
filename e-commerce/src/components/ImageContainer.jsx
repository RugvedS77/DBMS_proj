import React from 'react';
import image1 from '../assets/container/1.jpg';
import image2 from '../assets/container/2.jpg';
import image3 from '../assets/container/3.jpg';
import image4 from '../assets/container/4.jpg';
import image5 from '../assets/container/5.jpg';
import image6 from '../assets/container/6.jpg';

const ImageContainer = ({ items }) => {
  const images = [image1,image2,image3,image4,image5, image6];

  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className=" border rounded">
          <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default ImageContainer;
