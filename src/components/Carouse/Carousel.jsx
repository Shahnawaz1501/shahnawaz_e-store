import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.scss";
const ImageCarousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <div className="carousel-container">
        <Carousel
          showArrows={false}
          showThumbs={false}
          selectedItem={selectedImage}
        >
          {images.map((image, index) => (
            <div key={index} onClick={() => handleImageClick(index)}>
              <img src={image} alt={`Carousel Image ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="image-list">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={index === selectedImage ? "selected" : ""}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
