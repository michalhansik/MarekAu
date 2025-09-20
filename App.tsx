
import React, { useState } from 'react';
import type { View } from './types';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import ImageGallery from './components/ImageGallery';
import RomanMap from './components/RomanMap';
import Timeline from './components/Timeline';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('chat');

  const renderContent = () => {
    switch (activeView) {
      case 'gallery':
        return <ImageGallery />;
      case 'map':
        return <RomanMap />;
      case 'timeline':
        return <Timeline />;
      case 'chat':
      default:
        return <ChatWindow />;
    }
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col antialiased">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
