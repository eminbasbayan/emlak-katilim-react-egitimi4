import './ProductCard.css';

function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="product image"
        />
      </div>
      <div className="product-bottom">
        <b className="product-title">Product Title</b>
        <span className="product-price">100₺</span>
      </div>
    </div>
  );
}

export default ProductCard;
