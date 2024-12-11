function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product image" />
      </div>
      <b className="product-title">Product Title</b>
      <span className="product-price">100₺</span>
    </div>
  );
}

export default ProductCard