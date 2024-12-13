import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button';

import './AddProduct.css';
import ProductInput from './ProductInput';

const productInputs = [
  {
    label: 'Title',
    name: 'title',
    type: 'text',
    placeholder: 'Ürün ismi giriniz!',
  },
  {
    label: 'Description',
    name: 'description',
    type: 'text',
    placeholder: 'Ürün açıklaması giriniz!',
  },
  {
    label: 'Price',
    name: 'price',
    type: 'number',
    placeholder: 'Ürün fiyatı giriniz!',
  },
  {
    label: 'Image URL',
    name: 'image',
    type: 'text',
    placeholder: 'Ürün görseli giriniz!',
  },
  {
    label: 'Category',
    name: 'category',
    type: 'text',
    placeholder: 'Ürün kategorisi giriniz!',
  },
  {
    label: 'Rating',
    name: 'rating',
    type: 'number',
    placeholder: 'Ürün rating giriniz!',
  },
];

const initialState = {
  title: '',
  description: '',
  price: '',
  image: '',
  category: '',
  rating: '',
};

function AddProduct(props) {
  const [product, setProduct] = useState(initialState);

  function handleInputChange({ target: { name, value } }) {
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isFormValid = Object.values(product).every(
      (value) => value.trim() !== ''
    );

    if (!isFormValid) {
      props.setIsShowModal(true);
      return;
    }

    const newProduct = {
      ...product,
      id: Math.random(),
      price: Number(product.price),
      rating: {
        rate: product.rating,
      },
    };

    props.addNewProduct(newProduct);

    setProduct(initialState);
  }

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      {productInputs.map((input, index) => (
        <ProductInput
          key={index}
          {...input}
          value={product[input.name]}
          onInputChange={handleInputChange}
        />
      ))}
      <Button color={'success'}>Yeni Ürün Ekle</Button>
    </form>
  );
}

AddProduct.propTypes = {
  addNewProduct: PropTypes.func,
  setIsShowModal: PropTypes.func,
};

export default AddProduct;
