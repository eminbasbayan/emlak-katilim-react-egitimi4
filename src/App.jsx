import { RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Toaster } from 'react-hot-toast';

import router from './routes/routes';

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
