import React, { useState } from 'react';
import ProductList from '../components/add-products-list/add-products-list';

function AddProducts() {
  const [submitted, setSubmitted] = useState(false);
  const [inputs, setInputs] = useState({
    title: '',
    price: '',
    categoryId: '',
    imgUrl: '',
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const onSubmit = (event) => {
    setSubmitted(true);
    if (title && price && category && imgUrl) {
    }
    event.preventDefault();
  };

  const { title, price, category, imgUrl } = inputs;

  return (
    <div className="col-lg-4 offset-lg-4">
      <h2>Products Form</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <div className="form-group">
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            className="form-control"
          />
          {submitted && !title && (
            <div className="invalid-feedback d-block">Title is required</div>
          )}
        </div>
        <label htmlFor="price">Price</label>
        <div className="form-group">
          <input
            type="text"
            name="price"
            value={price}
            onChange={onChange}
            className="form-control"
          />
          {submitted && !price && (
            <div className="invalid-feedback d-block">Price is required</div>
          )}
        </div>

        <select className="form-group" onChange={onChange} name="categoryId">
          <ProductList></ProductList>
        </select>

        <div className="form-group">
          <label htmlFor="img url">Image URL</label>
          <input
            type="text"
            name="imgUrl"
            value={imgUrl}
            onChange={onChange}
            className="form-control"
          />
          {submitted && !imgUrl && (
            <div className="invalid-feedback d-block">
              Image URL is required
            </div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;
