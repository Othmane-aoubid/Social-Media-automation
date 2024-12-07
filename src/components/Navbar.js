import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    if(isOpen === false){
        setIsOpen(true);
    }else{
        setIsOpen(false);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-900">SocialAI</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a 
                  href="#features" 
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#register" 
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Register
                </a>
              </li>
              <li>
                <a 
                  href="#login" 
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Login
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            onClick={openMenu}
          >
            {isOpen ? (
              <X className="h-6 w-6" onClick={openMenu} />
            ) : (
              <Menu className="h-6 w-6" onClick={openMenu} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden ${
            isOpen ? 'block' : 'hidden'
          } px-2 pt-2 pb-3 space-y-1 bg-white border-t`}
          onClick={openMenu}
        >
          <a
            href="#features"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            onClick={openMenu}
          >
            Features
          </a>
          <a
            href="#register"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            onClick={openMenu}
          >
            Register
          </a>
          <a
            href="#login"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            onClick={openMenu}
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
