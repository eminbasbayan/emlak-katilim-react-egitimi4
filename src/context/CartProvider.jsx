import PropTypes from 'prop-types';
import { CartContext } from './CartContext';
import { useState } from 'react';

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prevCartItems) => [product, ...prevCartItems]);
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;
