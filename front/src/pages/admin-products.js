import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { productAction } from '../store/products/action';

import DisplayTable from '../components/display-table';

function AdminProducts() {
  const products = useSelector(({ products }) => products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('in useEffect');
    dispatch(productAction.getProducts());
  }, [dispatch]);

  const displayedFields = [
    { header: 'ID', name: 'id' },
    { header: 'Name', name: 'title' },
    { header: 'Price', name: 'price' },
    { header: 'Edit', name: 'edit' },
  ];

  const isEditable = true;
  const editUrl = `/admin-products/new/`;

  console.log('products in admin-products', products);
  return (
    <div>
      <h1>Admin Products</h1>

      <DisplayTable
        columns={displayedFields}
        data={products}
        edit={isEditable}
        url={editUrl}
      />

      <Link to="/admin-products/new/0">
        <button className="btn btn-primary">New Product</button>
      </Link>
    </div>
  );
}

export default AdminProducts;
