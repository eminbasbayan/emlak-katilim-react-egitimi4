import Button from '../UI/Button';

import './AddProduct.css';

function AddProduct() {
  return (
    <form className="add-product-form">
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Description:
        <input type="text" name="title" />
      </label>
      <label>
        Price:
        <input type="number" name="price" />
      </label>
      <label>
        Image URL:
        <input type="text" name="imageUrl" />
      </label>
      <label>
        Category:
        <input type="text" name="category" />
      </label>
      <Button color={'success'}>Yeni Ürün Ekle</Button>
    </form>
  );
}

export default AddProduct;
