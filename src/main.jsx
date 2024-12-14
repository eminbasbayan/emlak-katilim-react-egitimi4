import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import App from './App';

import CartProvider from './context/CartProvider';

import './index.css';
import ThemeProvider from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReduxProvider store={store}>
    <CartProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CartProvider>
  </ReduxProvider>
);
