import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addProductAction } from '../../store/add-product/action';
import BuildForm from '../form-builder';

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
    <div className="p-5 row col-10 offset-1">
      <div>
        <h2>Add New Product</h2>
        <form onSubmit={onSubmit}>
          <BuildForm fields={fields} />
          <div className="form-group">
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;
