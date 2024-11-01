import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image1 from '../../../public/sample1.jpg';
import Image2 from '../../../public/sample2.jpg';
import Image3 from '../../../public/sample3.png';
import Image4 from '../../../public/smaple4.png';
import '../../css/slideranimation.css'; // Import CSS for animations

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Image1, Image2, Image3, Image4];

  const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  const prevSlide = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  return (
    <div className="w-full flex items-center justify-center mt-6">
      <button onClick={prevSlide} className="bg-blue-500 text-white px-3 py-1 mr-2 rounded-full">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="image-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`image-slide ${index === currentImage ? 'active' : ''}`}
             // Adjust width and height as needed
          />
        ))}
      </div>
      <button onClick={nextSlide} className="bg-blue-500 text-white px-3 py-1 ml-2 rounded-full">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default ImageSlider;
