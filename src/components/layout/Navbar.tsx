import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Programs', path: '/programs' },
  { name: 'Campus', path: '/campus' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isOpen ? 'backdrop-blur py-3' : 'py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-display font-bold tracking-tight text-estg-blue"
          >
            ESTG<span className="text-foreground">.</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex items-center space-x-1">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={cn(
                      'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      link.path === location.pathname
                        ? 'text-estg-blue'
                        : 'text-foreground/80 hover:text-foreground hover:bg-estg-gray/10'
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="ml-4">
              <Button variant="default" size="default">
                Student Portal
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out max-h-0',
          isOpen && 'max-h-[400px] mt-4'
        )}>
          <ul className="flex flex-col space-y-2 pb-4">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                    link.path === location.pathname
                      ? 'text-estg-blue bg-estg-gray-light'
                      : 'text-foreground/80 hover:text-foreground hover:bg-estg-gray-light'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button variant="default" size="default" className="w-full">
                Student Portal
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
