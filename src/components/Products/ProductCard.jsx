import PropTypes from 'prop-types';
import Button from '../UI/Button';

import './ProductCard.css';

function ProductCard(props) {
  const { image, title, price, description, category } = props;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-bottom">
        <b className="product-title">{title}</b>
        <p className="product-description">{description}</p>
        <span className="product-price">{price}₺</span>
        <div className="buttons">
          <Button />
          <Button name="Sepete Ekle" />
          <Button name="Ürünü Sil" />
        </div>
      </div>
      <div className="product-category">{category}</div>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  category: PropTypes.string,
};

export default ProductCard;
