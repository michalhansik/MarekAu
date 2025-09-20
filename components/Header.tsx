
import React from 'react';
import type { View } from '../types';
import { ChatIcon, GalleryIcon, MapIcon, TimelineIcon } from './IconComponents';

interface HeaderProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const NavButton: React.FC<{
  label: string;
  view: View;
  activeView: View;
  onClick: (view: View) => void;
  children: React.ReactNode;
}> = ({ label, view, activeView, onClick, children }) => (
  <button
    onClick={() => onClick(view)}
    className={`flex items-center gap-2 px-3 py-2 text-sm md:text-base font-medium rounded-md transition-colors duration-200 ${
      activeView === view
        ? 'bg-amber-600 text-white shadow-md'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`}
  >
    {children}
    <span className="hidden md:inline">{label}</span>
  </button>
);

const Header: React.FC<HeaderProps> = ({ activeView, setActiveView }) => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-10 shadow-lg border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <img src="https://picsum.photos/id/1074/40/40" alt="Marcus Aurelius bust" className="h-10 w-10 rounded-full border-2 border-amber-500" />
            <h1 className="text-xl md:text-3xl font-bold text-white font-cinzel tracking-wider">
              Marek Aureliusz
            </h1>
          </div>
          <nav className="flex items-center space-x-2 md:space-x-4">
            <NavButton label="Czat" view="chat" activeView={activeView} onClick={setActiveView}><ChatIcon /></NavButton>
            <NavButton label="Galeria" view="gallery" activeView={activeView} onClick={setActiveView}><GalleryIcon /></NavButton>
            <NavButton label="Mapa" view="map" activeView={activeView} onClick={setActiveView}><MapIcon /></NavButton>
            <NavButton label="Oś Czasu" view="timeline" activeView={activeView} onClick={setActiveView}><TimelineIcon /></NavButton>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
