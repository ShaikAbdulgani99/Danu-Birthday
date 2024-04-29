import React, { useState, useEffect } from 'react';


const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust interval for desired transition time (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup function to prevent memory leaks
  }, [images]);

  return (
    <div id="image-slider">
      <img src={images[currentImageIndex]} alt="Image Slide" />
    </div>
  );
};

export default ImageSlider;
