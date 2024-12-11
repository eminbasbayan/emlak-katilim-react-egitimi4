import ProductCard from './ProductCard';
import { productsData } from './productsData';

import "./Products.css";

function Products() {
  return (
    <div className="products">
      <h1>Products</h1>
      <div className="products-wrapper">
        <ProductCard
          image={productsData[0].image}
          title={productsData[0].title}
          price={productsData[0].price}
        />
        <ProductCard
          image={productsData[1].image}
          title={productsData[1].title}
          price={productsData[1].price}
        />
        <ProductCard
          image={productsData[2].image}
          title={productsData[2].title}
          price={productsData[2].price}
        />
      </div>
    </div>
  );
}

export default Products;
