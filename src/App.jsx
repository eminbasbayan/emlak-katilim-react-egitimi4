import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Toaster } from 'react-hot-toast';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/product-details',
    element: <ProductDetailsPage />,
  },
]);

function App() {
  const { theme } = useSelector((state) => state.theme);

  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#1F2937',
    color: theme === 'light' ? '#1F2937' : '#ffffff',
    transition: 'all 0.3s ease',
  };
  return (
    <div className="app container mx-auto" style={appStyle}>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
