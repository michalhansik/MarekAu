
import React from 'react';
import { TIMELINE_EVENTS } from '../constants';

const Timeline: React.FC = () => {
  return (
    <div className="bg-gray-800 p-4 sm:p-8 rounded-lg shadow-2xl border border-gray-700">
      <h2 className="text-3xl font-cinzel text-center text-amber-400 mb-12">Oś Czasu Życia Marka Aureliusza</h2>
      <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute z-0 w-2 h-full bg-amber-800 shadow-md inset-0 left-1/2 -translate-x-1"></div>
        {TIMELINE_EVENTS.map((event, index) => (
          <div key={index} className="relative z-10">
            <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''} w-full`}>
              <div className="w-1/2"></div>
              <div className="w-1/2">
                <div className={`p-6 rounded-lg shadow-lg bg-gray-700 border-l-4 ${index % 2 === 0 ? 'border-r-4 border-l-0' : ''} border-amber-600`}>
                  <time className="text-amber-400 font-bold text-lg">{event.year}</time>
                  <h3 className="text-xl font-bold mt-1 text-gray-100">{event.title}</h3>
                  <p className="text-gray-300 mt-2">{event.description}</p>
                </div>
              </div>
            </div>
            <div className="absolute w-6 h-6 rounded-full bg-amber-500 z-20 left-1/2 -translate-x-1/2 -translate-y-4 border-4 border-gray-800"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
