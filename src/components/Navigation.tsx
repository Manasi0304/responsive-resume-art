
import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Navigation = ({ activeSection, onSectionClick }: NavigationProps) => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl z-50 border-b border-purple-200 dark:border-purple-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
            Manasi Bharati
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Achievements', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => onSectionClick(item.toLowerCase())}
                className={`relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 font-medium px-4 py-2 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transform hover:scale-105 ${
                  activeSection === item.toLowerCase() ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20' : ''
                }`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
              </button>
            ))}
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-all duration-300"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500 animate-spin" />
              ) : (
                <Moon className="h-5 w-5 text-purple-600 animate-pulse" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-purple-600" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="rounded-full"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    onSectionClick(item.toLowerCase());
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
