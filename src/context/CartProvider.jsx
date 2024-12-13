import PropTypes from 'prop-types';
import { CartContext } from './CartContext';

const CartProvider = (props) => {
  return (
    <CartContext.Provider
      value={{
        fullName: 'Emin Başbayan',
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
