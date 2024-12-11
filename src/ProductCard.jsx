import PropTypes from 'prop-types';
import './ProductCard.css';

function ProductCard(props) {
  const { image, title, price } = props;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-bottom">
        <b className="product-title">{title}</b>
        <span className="product-price">{price}₺</span>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
