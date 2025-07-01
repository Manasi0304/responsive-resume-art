
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Navigation = ({ activeSection, onSectionClick }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-indigo-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
            Manasi Bharati
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Achievements', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => onSectionClick(item.toLowerCase())}
                className={`relative text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-indigo-50 transform hover:scale-105 ${
                  activeSection === item.toLowerCase() ? 'text-indigo-600 bg-indigo-50' : ''
                }`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 transform scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
