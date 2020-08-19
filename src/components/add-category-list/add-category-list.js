import React from 'react';

function CategoryList() {
  const categoryArray = ['Bread', 'Vegetables', 'Fruits', 'Dairy'];

  const categoryList = categoryArray.map((product) => {
    return (
      <option value={product} key={product}>
        {product}
      </option>
    );
  });
  return categoryList;
}

export default CategoryList;
