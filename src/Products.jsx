import ProductCard from './ProductCard';
import { productsData } from './productsData';

function Products() {
  return (
    <div className="products">
      <h1>Products</h1>
      <ProductCard
        image={productsData[0].image}
        title={productsData[0].title}
        price={productsData[0].price}
      />
    </div>
  );
}

export default Products;
