import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { CartContext } from './CartContext';

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    const findProduct = cartItems.find((item) => item.id === product.id);

    if (findProduct) {
      const newCartItems = cartItems.map((cItem) => {
        if (findProduct.id === cItem.id) {
          return { ...cItem, quantity: cItem.quantity + 1 };
        }
        return cItem;
      });
      toast.success('Ürün miktarı arttırıldı!');
      return setCartItems(newCartItems);
    }

    setCartItems((prevCartItems) => [
      { ...product, quantity: 1 },
      ...prevCartItems,
    ]);
    toast.success('Ürün sepete eklendi!');
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
