import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Counter from './components/Counter';

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
]);

function App() {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#1F2937',
    color: theme === 'light' ? '#1F2937' : '#ffffff',
    transition: 'all 0.3s ease',
  };
  return (
    <div className="app container mx-auto" style={appStyle}>
      <Counter />
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
