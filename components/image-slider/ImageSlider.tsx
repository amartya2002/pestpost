"use client"
import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mb-10">
      <img className="border-4 border-zinc-300 rounded" src={images[imageIndex]} alt="" />
    </div>
  );
};

export default ImageSlider;

