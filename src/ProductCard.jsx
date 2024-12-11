import './ProductCard.css';

function ProductCard(props) {
  const image = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
  const title = "Product Title";
  const price = 100;

  console.log(props.fullName);
  

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={image}
          alt={title}
        />
      </div>
      <div className="product-bottom">
        <b className="product-title">{title}</b>
        <b className="product-title">{props.fullName}</b>
        <span className="product-price">{price}₺</span>
      </div>
    </div>
  );
}

export default ProductCard;
