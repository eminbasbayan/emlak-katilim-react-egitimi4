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

  function handleDeleteItem(productId) {
    const filteredProducts = products.filter((item) => item.id !== productId);
    setProducts(filteredProducts);
  }

  return (
    <div className="products">
      <h1 className='text-4xl font-bold'>Ürünler</h1>
      <h2 className='text-2xl font-bold'>Yeni Ürün Ekle</h2>
      <AddProduct addNewProduct={addNewProduct} />
      <div className="products-wrapper">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            rating={product.rating.rate}
            onDeleteItem={handleDeleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
