
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';

const ImageGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImage = GALLERY_IMAGES[selectedIndex];

  return (
    <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-2xl border border-gray-700">
      <h2 className="text-3xl font-cinzel text-center text-amber-400 mb-6">Galeria</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4">
          <div className="aspect-w-16 aspect-h-9 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
          <p className="mt-4 text-center text-gray-300 italic">{selectedImage.caption}</p>
        </div>
        <div className="lg:w-1/4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 max-h-[600px] overflow-y-auto pr-2">
                {GALLERY_IMAGES.map((image, index) => (
                <button
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`relative rounded-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-amber-500 transition-all duration-200 ${
                    selectedIndex === index ? 'ring-4 ring-amber-500' : 'ring-2 ring-transparent hover:ring-amber-400'
                    }`}
                >
                    <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-24 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-20 transition-colors"></div>
                </button>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
