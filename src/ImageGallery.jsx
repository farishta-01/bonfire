import React from 'react';
import Image1 from './assets/1.webp';
import Image2 from './assets/2.webp';
import Image3 from './assets/3.webp';
import Image4 from './assets/4.webp';
import Image5 from './assets/5.webp';
import Image6 from './assets/6.webp';
import Image7 from './assets/7.webp';
import Image8 from './assets/8.webp';
import Image9 from './assets/9.webp';
import Image10 from './assets/10.webp';
import Image11 from './assets/11.webp';
import Image12 from './assets/12.webp';
import Image13 from './assets/13.webp';
import Image14 from './assets/14.webp';

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
];

const ImageGallery = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-4">Image Gallery</h2>
      <div className="container mx-auto mt-8 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 bg-white">
        {images.map((image, index) => (
          <div key={index} className="w-full aspect-w-4 aspect-h-3">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full rounded-md shadow-md"
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default ImageGallery;
