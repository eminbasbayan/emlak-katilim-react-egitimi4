import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddProduct from './AddProduct';
import Modal from '../UI/Modal';
import ProductCard from './ProductCard';

import {
  addProduct,
  reduxFetchProducts,
  removeProduct,
} from '../../redux/slices/productSlice';
import './Products.css';

function Products() {
  const [isShowModal, setIsShowModal] = useState(false);
  const { loading, productData } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  function addNewProduct(product) {
    dispatch(addProduct(product));
  }

  function handleDeleteItem(productId) {
    dispatch(removeProduct(productId));
  }

  useEffect(() => {
    if (loading === 'idle') {
      dispatch(reduxFetchProducts());
    }
  }, [loading, dispatch]);
  console.log(loading);

  return (
    <div className="products">
      <h1 className="text-4xl font-bold">Ürünler</h1>
      <h2 className="text-2xl font-bold">Yeni Ürün Ekle</h2>
      <AddProduct
        addNewProduct={addNewProduct}
        setIsShowModal={setIsShowModal}
      />
      {loading === 'loading' && (
        <p className="font-bold text-lg mb-4">Ürünler Yükleniyor...</p>
      )}
      <div className="products-wrapper">
        {productData.map((product) => (
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
