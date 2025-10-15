import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">Y</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                YODDHA
              </h1>
              <p className="text-sm text-muted-foreground">The Warrior Within</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="hover:text-orange-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('submit-tip')} className="hover:text-orange-600 transition-colors">
              Submit Tip
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-orange-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('awareness')} className="hover:text-orange-600 transition-colors">
              Drug Awareness
            </button>
            <button onClick={() => scrollToSection('initiatives')} className="hover:text-orange-600 transition-colors">
              Initiatives
            </button>
            <button onClick={() => scrollToSection('help')} className="hover:text-orange-600 transition-colors">
              Help Us
            </button>
            <Button onClick={() => scrollToSection('submit-tip')} className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
              Report Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3">
            <button onClick={() => scrollToSection('home')} className="text-left py-2 hover:text-orange-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('submit-tip')} className="text-left py-2 hover:text-orange-600 transition-colors">
              Submit Tip
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-orange-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('awareness')} className="text-left py-2 hover:text-orange-600 transition-colors">
              Drug Awareness
            </button>
            <button onClick={() => scrollToSection('initiatives')} className="text-left py-2 hover:text-orange-600 transition-colors">
              Initiatives
            </button>
            <button onClick={() => scrollToSection('help')} className="text-left py-2 hover:text-orange-600 transition-colors">
              Help Us
            </button>
            <Button onClick={() => scrollToSection('submit-tip')} className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 w-full">
              Report Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
