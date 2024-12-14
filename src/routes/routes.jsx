import { createBrowserRouter } from 'react-router-dom';
import { mainRoutes } from './mainRoutes';
import { authRoutes } from './authRoutes';
import { adminRoutes } from './adminRoutes';

const router = createBrowserRouter([
  ...mainRoutes,
  ...authRoutes,
  ...adminRoutes,
]);

export default router;
