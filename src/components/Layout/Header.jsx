import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/slices/themeSlice';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 mb-10">
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
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Ana Sayfa
            </Link>
            <Link
              to="/products"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Ürünler
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Hakkımızda
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              İletişim
            </Link>
          </nav>

          {/* Shopping Cart */}
          <div className="flex items-center">
            <button
              className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100 flex gap-1"
              onClick={() => dispatch(toggleTheme())}
            >
              <span>{theme}</span>
            </button>
            <Link
              to="/cart"
              className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100 flex gap-1"
            >
              <FaShoppingCart className="text-xl" />
              <span>{cartItems.length}</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-white border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-600 transition-colors px-4"
              >
                Ana Sayfa
              </Link>
              <Link
                to="/products"
                className="text-gray-600 hover:text-blue-600 transition-colors px-4"
              >
                Ürünler
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-blue-600 transition-colors px-4"
              >
                Hakkımızda
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-blue-600 transition-colors px-4"
              >
                İletişim
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
