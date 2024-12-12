import PropTypes from 'prop-types';

const ProductInput = ({
  label,
  type,
  name,
  placeholder,
  onInputChange,
  value,
}) => {
  return (
    <label>
      {label}:
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onInputChange}
      />
    </label>
  );
};

ProductInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onInputChange: PropTypes.func,
  value: PropTypes.string,
};

export default ProductInput;
