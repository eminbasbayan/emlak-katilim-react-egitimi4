import { useState } from 'react';
import Button from '../UI/Button';

import './AddProduct.css';

function AddProduct() {
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

  console.log(product);

  return (
    <form className="add-product-form">
      <label>
        Title:
        <input type="text" name="title" onChange={handleInputChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" onChange={handleInputChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" onChange={handleInputChange} />
      </label>
      <label>
        Image URL:
        <input type="text" name="image" onChange={handleInputChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" onChange={handleInputChange} />
      </label>
      <Button color={'success'}>Yeni Ürün Ekle</Button>
    </form>
  );
}

export default AddProduct;
