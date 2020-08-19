import handleResponse from './handle-response';

export const productService = { addProduct };

function addProduct(title, price, categoryId, imageUrl) {
  const requestOptions = {
    method: 'POST',
    headers: { ' Content-Type': 'application/json' },
    body: JSON.stringify({ title, price, categoryId, imageUrl }),
  };
  return fetch('/products/add', requestOptions).then(handleResponse);
}
