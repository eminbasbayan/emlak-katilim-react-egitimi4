import PropTypes from 'prop-types';

import './Button.css';

function Button({
  color = 'primary',
  size = 'lg',
  className = '',
  style = {},
  onClick,
  children,
}) {
  return (
    <button
      className={`btn btn-${color} btn-${size} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
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
