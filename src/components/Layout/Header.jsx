import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/slices/themeSlice';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const { theme } = useSelector((state) => state.theme);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-30 mb-10">
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-600 transition-colors ${
                  isActive && '!text-blue-600'
                }`
              }
            >
              Ana Sayfa
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-600 transition-colors ${
                  isActive && '!text-blue-600'
                }`
              }
            >
              Ürünler
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-600 transition-colors ${
                  isActive && '!text-blue-600'
                }`
              }
            >
              Hakkımızda
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-600 transition-colors ${
                  isActive && '!text-blue-600'
                }`
              }
            >
              İletişim
            </NavLink>
          </nav>

          {/* Shopping Cart */}
          <div className="flex items-center">
            <button
              className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100 flex gap-1"
              onClick={() => navigate('/admin')}
            >
              <span>Admin</span>
            </button>
            <button
              className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100 flex gap-1"
              onClick={() => navigate('/auth/login')}
            >
              <span>Login</span>
            </button>
            <button
              className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100 flex gap-1"
              onClick={() => dispatch(toggleTheme())}
            >
              <span>{theme}</span>
            </button>
            <button
              className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-100 flex gap-1"
              onClick={() => navigate('/cart')}
            >
              <FaShoppingCart className="text-xl" />
              <span>{cartItems.length}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-white border-t">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className="text-gray-600 hover:text-blue-600 transition-colors px-4"
              >
                Ana Sayfa
              </NavLink>
              <NavLink
                to="/products"
                className="text-gray-600 hover:text-blue-600 transition-colors px-4"
              >
                Ürünler
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-600 hover:text-blue-600 transition-colors px-4"
              >
                Hakkımızda
              </NavLink>
              <NavLink
                to="/contact"
                className="text-gray-600 hover:text-blue-600 transition-colors px-4"
              >
                İletişim
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
