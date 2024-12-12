import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button';

import './AddProduct.css';

function AddProduct(props) {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    category: '',
  });

  function handleInputChange({ target: { name, value } }) {
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isFormValid = Object.values(product).every(
      (value) => value.trim() !== ''
    );

    if (!isFormValid) {
      window.alert('Inputlar boş geçilemez.');
      return;
    }

    const newProduct = {
      ...product,
      id: Math.random(),
      price: Number(product.price),
    };

    props.addNewProduct(newProduct);

    setProduct({
      title: '',
      description: '',
      price: '',
      image: '',
      category: '',
    });
  }

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleInputChange}
        />
      </label>
      <Button color={'success'}>Yeni Ürün Ekle</Button>
    </form>
  );
}

AddProduct.propTypes = {
  addNewProduct: PropTypes.func,
};

export default AddProduct;
