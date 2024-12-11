import ProductCard from './ProductCard';

/* parent component */
function Products() {
  const fullName = 'Emin Başbayan';

  return (
    <div className="products">
      <h1>Products</h1>
      <ProductCard fullName={fullName} /> {/* child component */}
    </div>
  );
}

export default Products;
