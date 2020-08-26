import React from 'react';

import './product.scss';

function ProductCard(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.image} alt="product" />
      <div className="card-body">
        <p className="card-text">{props.title}</p>
        <p className="card-text">${props.price}</p>
      </div>
    </div>
  );
}
export default ProductCard;
