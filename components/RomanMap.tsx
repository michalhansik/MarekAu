
import React from 'react';

const RomanMap: React.FC = () => {
  return (
    <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-2xl border border-gray-700">
      <h2 className="text-3xl font-cinzel text-center text-amber-400 mb-6">Imperium Rzymskie</h2>
      <p className="text-center text-gray-400 mb-6 max-w-3xl mx-auto">
        Mapa przedstawia zasięg Imperium Rzymskiego około 117 r. n.e., u szczytu jego potęgi za panowania cesarza Trajana. Za czasów Marka Aureliusza granice były bardzo podobne, choć nieustannie zagrożone przez najazdy plemion barbarzyńskich.
      </p>
      <div className="bg-gray-900 rounded-lg overflow-hidden border-2 border-amber-800 shadow-lg">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/0/00/Roman_Empire_Trajan_117AD.png" 
          alt="Mapa Imperium Rzymskiego za czasów Trajana"
          className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105 cursor-zoom-in"
        />
      </div>
    </div>
  );
};

export default RomanMap;
