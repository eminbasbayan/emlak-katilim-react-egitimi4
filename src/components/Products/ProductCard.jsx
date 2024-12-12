import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button';

import './ProductCard.css';

function ProductCard(props) {
  const [titleState, setTitleState] = useState(props.title);
  const { image, price, description, category } = props;

  function handleClick() {
    setTitleState('Title Güncellendi!');
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={titleState} />
      </div>
      <div className="product-bottom">
        <b className="product-title">{titleState}</b>
        <p className="product-description">{description}</p>
        <span className="product-price">{price}₺</span>
        <div className="buttons">
          <Button onClick={handleClick}>Title Güncelle</Button>
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
  setTitle: PropTypes.func,
};

export default ProductCard;
