import handleResponse from './handle-response';

export const productService = { addProduct, editProduct };

function addProduct(title, price, categoryId, imageUrl) {
  const requestOptions = {
    method: 'POST',
    headers: { ' Content-Type': 'application/json' },
    body: JSON.stringify({ title, price, categoryId, imageUrl }),
  };
  return fetch('/products/add', requestOptions).then(handleResponse);
}

function editProduct(title, price, categoryId, imageUrl, id) {
  const requestOptions = {
    method: 'PUT',
    headers: { ' Content-Type': 'application/json' },
    body: JSON.stringify({ title, price, categoryId, imageUrl, id }),
  };
  return fetch('/product/edit', requestOptions).then(handleResponse);
}
