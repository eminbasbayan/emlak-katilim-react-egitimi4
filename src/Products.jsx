import ProductCard from './ProductCard';
import { productsData } from './productsData';

import './Products.css';

function Products() {
  return (
    <div className="products">
      <h1>Products</h1>
      <div className="products-wrapper">
        {productsData.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
