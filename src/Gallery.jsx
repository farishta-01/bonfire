
import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import PinAuthentication from './PinAuthentication';
import { Routes } from 'react-router-dom';

const  Gallery= () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthenticationSuccess = () => {
    setIsAuthenticated(true);
  };

 const images = [];
 

  return (
    
    <div>
      {isAuthenticated ? (
        <ImageGallery images={images} />
      ) : (
        <PinAuthentication onAuthenticationSuccess={handleAuthenticationSuccess} />
      )}
    </div>
  );
};

export default Gallery;
