
import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { ChatMessage } from '../types';
import { sendMessageStreamToAurelius } from '../services/geminiService';
import { PRESET_QUESTIONS } from '../constants';
import { SendIcon, UserIcon, AureliusIcon } from './IconComponents';

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content: 'Witaj. Jestem Marek Aureliusz. Zadaj mi pytanie o filozofię, cnotę lub o to, jak odnaleźć spokój w zgiełku życia. W czym mogę ci pomóc?',
    },
  ]);
  const [userInput, setUserInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = useCallback(async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const stream = await sendMessageStreamToAurelius(messageText);
      
      setMessages((prev) => [...prev, { role: 'model', content: '' }]);

      for await (const chunk of stream) {
        const chunkText = chunk.text;
        setMessages((prev) => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage.role === 'model') {
            const updatedMessages = [...prev];
            updatedMessages[prev.length - 1] = {
              ...lastMessage,
              content: lastMessage.content + chunkText,
            };
            return updatedMessages;
          }
          return prev;
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'model', content: 'Zaszła chwila zakłócenia w kosmosie. Spróbuj zadać pytanie ponownie.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(userInput);
  };
  
  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] max-h-[800px] bg-gray-800 rounded-lg shadow-2xl border border-gray-700">
      <div className="flex-grow p-6 overflow-y-auto">
        <div className="space-y-6">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'model' && <AureliusIcon />}
              <div className={`max-w-xl p-4 rounded-xl shadow-md ${msg.role === 'user' ? 'bg-amber-600 text-white rounded-br-none' : 'bg-gray-700 text-gray-200 rounded-bl-none'}`}>
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
               {msg.role === 'user' && <UserIcon />}
            </div>
          ))}
          {isLoading && messages[messages.length - 1].role === 'user' && (
             <div className="flex items-start gap-4">
                <AureliusIcon />
                <div className="max-w-xl p-4 rounded-xl shadow-md bg-gray-700 text-gray-200 rounded-bl-none">
                    <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-0"></span>
                        <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-200"></span>
                        <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-400"></span>
                    </div>
                </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
      </div>
      <div className="p-4 border-t border-gray-700">
         <div className="flex flex-wrap gap-2 mb-4">
              {PRESET_QUESTIONS.map((q, i) => (
                <button 
                  key={i}
                  onClick={() => handleSendMessage(q)}
                  disabled={isLoading}
                  className="px-3 py-1.5 text-sm bg-gray-700 text-gray-300 rounded-full hover:bg-gray-600 disabled:opacity-50 transition-colors"
                >
                  {q}
                </button>
              ))}
          </div>
        <form onSubmit={handleSubmit} className="flex items-center gap-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Napisz swoją myśl lub pytanie..."
            className="flex-grow w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none transition-shadow"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="flex-shrink-0 bg-amber-600 text-white p-3 rounded-lg hover:bg-amber-700 disabled:bg-gray-600 transition-colors"
          >
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
