import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import image1 from '../assets/banner/img1.webp'
import image2 from '../assets/banner/img2.webp'
import image3 from '../assets/banner/img3.jpg'
import image4 from '../assets/banner/img4.jpg'
import image5 from '../assets/banner/img5.webp'

const BannerProduct = () => {

    let [currentImage, setCurrentImage] = useState(0)

    const imageArray = [1,2,3,4,5]

    const desktopImages = [image1,image2,image3,image4,image5]

    const nextImage = () => {
        if(imageArray.length - 1 > currentImage){
            setCurrentImage(++currentImage)
        }
    }

    const prevImage = () => {
        if(imageArray.length !== 0){
            setCurrentImage(currentImage - 1)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(imageArray.length - 1 > currentImage){
                nextImage()
            }else{
                setCurrentImage(0)
            }
        }, 5000)

        return () => clearInterval(interval);
    },[currentImage])

    return (
        <>
            <div className='container mx-auto px-4 rounded '>
        <div className='h-56 md:h-72 w-full bg-slate-200 relative'>

                <div className='absolute z-10 h-full w-full md:flex items-center hidden '>
                    <div className=' flex justify-between w-full text-2xl'>
                        <button onClick={prevImage} className='bg-white shadow-md rounded-full p-1'><FaAngleLeft/></button>
                        <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight/></button> 
                    </div>
                </div>

                {/**desktop and tablet version */}
              <div className='hidden md:flex h-full w-full overflow-hidden'>
                {
                        desktopImages.map((imageURl,index)=>{
                            return(
                            <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                <img src={imageURl} className='w-full h-full'/>
                            </div>
                            )
                        })
                }
              </div>
        </div>
    </div>
        </>
    )
}

export default BannerProduct;