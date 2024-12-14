import PropTypes from 'prop-types';
import Button from '../UI/Button';

import './ProductCard.css';
import { addToCart } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

function ProductCard(props) {
  const { onDeleteItem, ...product } = props;
  const { id, title, image, price, description, category, rating } = product;
  const dispatch = useDispatch();

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
          <Button onClick={() => dispatch(addToCart(product))}>
            Sepete Ekle
          </Button>
          <Button color="danger" onClick={() => onDeleteItem(id)}>
            Ürünü Sil
          </Button>
        </div>
      </div>
      <div className="product-category">{category}</div>
      <div className="product-rating">{rating}</div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  category: PropTypes.string,
  rating: PropTypes.number,
  setTitle: PropTypes.func,
  onDeleteItem: PropTypes.func,
};

export default ProductCard;
