import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addProductAction } from '../../store/add-product/action';
import BuildForm from '../form-builder';
import ProductCard from './product-card';

import './product.scss';
import { getProductAction } from '../../store/view-products/action';

function AddProducts() {
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const [inputs, setInputs] = useState({
    title: '',
    price: '',
    categoryId: 'Bread',
    imageUrl: '',
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const onSubmit = (event) => {
    setSubmitted(true);
    if (title && price && categoryId && imageUrl) {
      dispatch(addProductAction.addProduct(title, price, categoryId, imageUrl));
      dispatch(getProductAction.getProducts);
    }
    event.preventDefault();
  };

  const { title, price, categoryId, imageUrl } = inputs;

  const fields = [
    {
      fieldType: 'input',
      type: 'text',
      name: 'title',
      placeholder: '',
      value: title,
      className: 'form-control',
      title: 'Title',
      onChange: onChange,
      submitted: submitted,
    },
    {
      fieldType: 'input',
      type: 'text',
      name: 'price',
      placeholder: '',
      value: price,
      className: 'form-control',
      title: 'Price',
      onChange: onChange,
      submitted: submitted,
    },
    {
      fieldType: 'select',
      name: 'categoryId',
      className: 'form-control',
      title: 'Category',
      onChange: onChange,
      submitted: submitted,
    },
    {
      fieldType: 'input',
      type: 'text',
      name: 'imageUrl',
      placeholder: '',
      value: imageUrl,
      className: 'form-control',
      title: 'Image URL',
      onChange: onChange,
      submitted: submitted,
    },
  ];

  return (
    <div className=" container p-5 offset-1">
      <div>
        <h2>Add New Product</h2>
        <form onSubmit={onSubmit} className="row">
          <div className="col-8">
            <BuildForm fields={fields} />

            <div className="form-group button-spacing">
              <button className="btn btn-primary">Save Product</button>
            </div>
          </div>
          <div className="col-4">
            <ProductCard image={imageUrl} title={title} price={price} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;
