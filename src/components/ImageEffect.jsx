import React, { useState, useEffect } from 'react';
import '../styles/styles.css';

const ImageEffect = ({ imageUrl }) => {
  const [isGrayScale, setIsGrayScale] = useState(false);

  const toggleGrayScale = () => {
    setIsGrayScale(prevIsGrayScale => !prevIsGrayScale);
  };

  useEffect(() => {
    const intervalId = setInterval(toggleGrayScale, 100); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="image-container">
      <img
        src={imageUrl}
        alt="main-banner"
        className={isGrayScale ? 'gray-scale' : ''}
      />
    </div>
  );
};

export default ImageEffect;
