import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md relative mb-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-blue-600">
              Logo
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Ana Sayfa
            </a>
            <a
              href="/products"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Ürünler
            </a>
            <a
              href="/about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Hakkımızda
            </a>
            <a
              href="/contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              İletişim
            </a>
          </nav>

          {/* Shopping Cart */}
          <div className="flex items-center">
            <a
              href="/cart"
              className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100"
            >
              <FaShoppingCart className="text-xl" />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-white border-t">
            <div className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors px-4"
              >
                Ana Sayfa
              </a>
              <a
                href="/products"
                className="text-gray-600 hover:text-blue-600 transition-colors px-4"
              >
                Ürünler
              </a>
              <a
                href="/about"
                className="text-gray-600 hover:text-blue-600 transition-colors px-4"
              >
                Hakkımızda
              </a>
              <a
                href="/contact"
                className="text-gray-600 hover:text-blue-600 transition-colors px-4"
              >
                İletişim
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
