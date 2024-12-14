import { createBrowserRouter } from 'react-router-dom';
import { mainRoutes } from './mainRoutes';
import { authRoutes } from './authRoutes';
import { adminRoutes } from './adminRoutes';
import ErrorPage from '../components/UI/ErrorPage';

const router = createBrowserRouter([
  ...mainRoutes,
  ...authRoutes,
  ...adminRoutes,
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
