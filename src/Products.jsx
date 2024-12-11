import ProductCard from './ProductCard';

function Products() {
  const image = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';
  const title = 'Product Title';
  const price = 100;

  return (
    <div className="products">
      <h1>Products</h1>
      <ProductCard image={image} title={title} price={price} />
    </div>
  );
}

export default Products;
