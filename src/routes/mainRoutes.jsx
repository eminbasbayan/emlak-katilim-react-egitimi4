import MainLayout from '../layouts/MainLayout';
import AboutPage from '../pages/AboutPage';
import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import ProductsPage from '../pages/ProductsPage';

export const mainRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
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
        path: '/product/:productId',
        element: <ProductDetailsPage />,
      },
    ],
  },
];
