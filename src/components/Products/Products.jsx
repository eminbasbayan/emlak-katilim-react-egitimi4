import ProductCard from './ProductCard';
import AddProduct from './AddProduct';

import { productsData } from '../../productsData';

import './Products.css';

function Products() {
  
  return (
    <div className="products">
      <h1>Ürünler</h1>
      <h2>Yeni Ürün Ekle</h2>
      <AddProduct />
      <div className="products-wrapper">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
