
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
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl z-50 border-b border-violet-200/50 dark:border-violet-800/50 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
            Manasi Bharati
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Achievements', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => onSectionClick(item.toLowerCase())}
                className={`relative text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 font-medium px-4 py-2 rounded-full hover:bg-violet-50 dark:hover:bg-violet-900/20 transform hover:scale-105 group ${
                  activeSection === item.toLowerCase() ? 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20' : ''
                }`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-600 to-cyan-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            ))}
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/20 transition-all duration-300 hover:scale-110"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500 animate-spin" />
              ) : (
                <Moon className="h-5 w-5 text-violet-600 animate-pulse" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/20"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-violet-600" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/20"
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
                  className={`text-left px-4 py-3 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-300 hover:scale-105 ${
                    activeSection === item.toLowerCase() ? 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20' : 'text-slate-700 dark:text-slate-300'
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
