import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { productActions } from '../../store/products/action';
import BuildForm from '../form-builder';
import ProductCard from './product-card';

import './product.scss';

function AddProducts() {
  const id = Number(useParams().id);
  const products = useSelector(({ products }) => products.products);
  let product = null;
  let completedForm = false;
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);

  if (id !== 0 && products) {
    product = products.find((object) => object.id === id);
  }

  const [inputs, setInputs] = useState({
    title: product ? product.title : '',
    price: product ? product.price : '',
    categoryId: product ? product.categoryId : 'Bread',
    imageUrl: product ? product.imageUrl : '',
  });

  const { title, price, categoryId, imageUrl } = inputs;
  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const onSubmit = (event) => {
    if (title && price && categoryId && imageUrl) {
      completedForm = true;
    }
    setSubmitted(true);
    event.preventDefault();
    if (completedForm) {
      if (id === 0) {
        dispatch(productActions.addProduct(title, price, categoryId, imageUrl));
      } else {
        dispatch(
          productActions.editProduct(title, price, categoryId, imageUrl, id)
        );
      }
      dispatch(productActions.getProducts());
    }
  };

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
