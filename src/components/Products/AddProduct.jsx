import { useState } from 'react';
import Button from '../UI/Button';

import './AddProduct.css';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescChange(event) {
    setDescription(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  console.log({ title, description, image, category, price });

  return (
    <form className="add-product-form">
      <label>
        Title:
        <input type="text" onChange={handleTitleChange} />
      </label>
      <label>
        Description:
        <input type="text" onChange={handleDescChange} />
      </label>
      <label>
        Price:
        <input type="number" onChange={handlePriceChange} />
      </label>
      <label>
        Image URL:
        <input type="text" onChange={handleImageChange} />
      </label>
      <label>
        Category:
        <input type="text" onChange={handleCategoryChange} />
      </label>
      <Button color={'success'}>Yeni Ürün Ekle</Button>
    </form>
  );
}

export default AddProduct;
