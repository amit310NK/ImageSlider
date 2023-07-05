import React, { useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import  img1  from './images/photo.avif'
import img2 from "./images/photo2.avif"
import img3 from "./images/photo3.avif"
import img4 from "./images/photo4.avif"
import img5 from "./images/photo5.avif"


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImg = () => {
    const isFirstImg = currentIndex === 0;
    const newIndex = isFirstImg ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImg = () => {
    const isLastImg = currentIndex === images.length - 1;
    const newIndex = isLastImg ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const images = [
    {
      url: `${img1}`,
    },
    {
      url: `${img2}`,
    },
    {
      url: `${img3}`,
    },

    {
      url: `${img4}`,
    },
    {
      url: `${img5}`,
    },
  ];

  return (
    <div className="max-w-[1400px] h-[780px]  w-full m-auto py-16 px-4 relative group">
      <h1 className=" w-full text-5xl text-center mb-2 font-semibold ">Card Slider</h1>
      <div className="cards h-full w-full">
        
            <div
              style={{ backgroundImage: `url(${images[currentIndex].url})` }}
              className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            ></div>
          
      </div>

      
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronDoubleLeft onClick={prevImg} size={30} />
      </div>
      
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronDoubleRight onClick={nextImg} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {images.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
