import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../context/CartContext';

import './Button.css';

function Button({
  color = 'primary',
  size = 'lg',
  className = '',
  style = {},
  onClick,
  children,
}) {
  const { fullName } = useContext(CartContext);


  return (
    <button
      className={`btn btn-${color} btn-${size} ${className}`}
      style={style}
      onClick={onClick}
    >
      {fullName}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'success', 'danger']),
  size: PropTypes.oneOf(['xl', 'lg', 'sm']),
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
