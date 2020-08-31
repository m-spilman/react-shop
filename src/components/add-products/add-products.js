import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { productAction } from '../../store/products/action';
import BuildForm from '../form-builder';
import ProductCard from './product-card';

import './product.scss';

function AddProducts() {
  const path = window.location.pathname;
  const index = path.lastIndexOf('/');
  const length = path.length;
  const id = Number(path.substr(index + 1, length));
  const products = useSelector(({ products }) => products.products);
  let product = null;

  if (id !== 0 && products) {
    for (let i = 0; i <= products.length - 1; i++) {
      if (products[i].id === id) {
        product = products[i];
      }
    }
  }
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);

  const [inputs, setInputs] = useState({
    title: product ? product.title : '',
    price: product ? product.price : '',
    categoryId: product ? product.price : 'Bread',
    imageUrl: product ? product.price : '',
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const onSubmit = (event) => {
    setSubmitted(true);
    if (id === 0 && title && price && categoryId && imageUrl) {
      dispatch(productAction.addProduct(title, price, categoryId, imageUrl));
      dispatch(productAction.getProducts());
    }
    if (id !== 0 && title && price && categoryId && imageUrl) {
      dispatch(
        productAction.editProduct(title, price, categoryId, imageUrl, id)
      );
      dispatch(productAction.getProducts());
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
    <div className=" container-fluid p-5 offset-1">
      <div>
        <h2>Product</h2>
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
