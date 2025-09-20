
import React from 'react';

export const SendIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

export const UserIcon: React.FC = () => (
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center border-2 border-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    </div>
);

export const AureliusIcon: React.FC = () => (
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-900 flex items-center justify-center border-2 border-amber-600">
         <img src="https://picsum.photos/id/1074/40/40" alt="Marcus Aurelius bust" className="h-10 w-10 rounded-full" />
    </div>
);

export const ChatIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
  </svg>
);

export const GalleryIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
  </svg>
);

export const MapIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM10 0a1 1 0 011 1v18a1 1 0 01-1.707.707l-6-6A1 1 0 013 13V7a1 1 0 011-1h1V1a1 1 0 011-1h4zm8 2a1 1 0 01.707 1.707l-6 6A1 1 0 0112 11V5a1 1 0 011-1h1V1a1 1 0 011-1h2z" clipRule="evenodd" />
  </svg>
);

export const TimelineIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 2a1 1 0 00-1 1v1.586l-3.293-3.293a1 1 0 10-1.414 1.414L7.586 6H6a1 1 0 00-1 1v4a1 1 0 001 1h1.586l-3.293 3.293a1 1 0 101.414 1.414L9 13.414V15a1 1 0 001 1s1.5-2.25 1.5-4.5S10 2 10 2z" />
    <path d="M12 4a1 1 0 100-2 1 1 0 000 2z" />
    <path d="M12 18a1 1 0 100-2 1 1 0 000 2z" />
    <path d="M12 11a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
);
