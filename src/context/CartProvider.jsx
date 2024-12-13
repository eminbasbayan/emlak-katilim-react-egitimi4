import PropTypes from 'prop-types';
import { CartContext } from './CartContext';
import { useState } from 'react';

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((prevCartItems) => [product, ...prevCartItems]);
  }

  function deleteFromCart(cartItemId) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== cartItemId)
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        deleteFromCart,
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
