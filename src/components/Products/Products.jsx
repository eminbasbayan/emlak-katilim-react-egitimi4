import { useState } from 'react';

import AddProduct from './AddProduct';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import ProductCard from './ProductCard';

import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

  function addNewProduct(product) {
    setProducts([product, ...products]);
  }

  function handleDeleteItem(productId) {
    const filteredProducts = products.filter((item) => item.id !== productId);
    setProducts(filteredProducts);
  }

  function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
      .finally(() => console.log('İşlem tamamlandı!'));
  }

  return (
    <div className="products">
      <h1 className="text-4xl font-bold">Ürünler</h1>
      <h2 className="text-2xl font-bold">Yeni Ürün Ekle</h2>
      <AddProduct
        addNewProduct={addNewProduct}
        setIsShowModal={setIsShowModal}
      />
      <Button onClick={fetchProducts}>Ürünleri Getir</Button>
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
      {isShowModal && (
        <Modal
          title="Inputlar boş geçilemez!"
          description="Form inputlarının hepsi dolu olmalı!"
          setIsShowModal={setIsShowModal}
        />
      )}
    </div>
  );
}

export default Products;
