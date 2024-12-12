import ProductCard from './ProductCard';
import AddProduct from './AddProduct';

import { productsData } from '../../productsData';

import './Products.css';
import { useState } from 'react';

function Products() {
  const [products, setProducts] = useState(productsData);

  function addNewProduct(product) {
    setProducts([product, ...products]);
  }

  return (
    <div className="products">
      <h1>Ürünler</h1>
      <h2>Yeni Ürün Ekle</h2>
      <AddProduct addNewProduct={addNewProduct} />
      <div className="products-wrapper">
        {products.map((product) => (
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
