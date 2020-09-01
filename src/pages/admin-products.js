import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DisplayTable from '../components/display-table';

function AdminProducts() {
  const products = useSelector(({ products }) => products.products);

  const displayedFields = [
    { header: 'ID', name: 'id' },
    { header: 'Name', name: 'title' },
    { header: 'Price', name: 'price' },
    { header: 'Edit', name: 'edit' },
  ];
  const isEditable = true;
  const editUrl = 'edit';

  return (
    <div>
      <h1>Admin Products</h1>
      <DisplayTable
        columns={displayedFields}
        data={products}
        edit={isEditable}
        url={editUrl}
      />
      <Link to="/admin-products/new">
        <button className="btn btn-primary">New Product</button>
      </Link>
    </div>
  );
}

export default AdminProducts;
