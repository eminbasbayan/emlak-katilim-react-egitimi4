import PropTypes from 'prop-types';

import "./Button.css";

function Button(props) {
  console.log(props);

  return <button>{props.children}</button>;
}

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
