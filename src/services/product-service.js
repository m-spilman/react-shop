import handleResponse from './handleResponse';

export const productService = { addProduct };

function addProduct(product) {
  console.log(product);
  const requestOptions = {
    method: 'POST',
    headers: { ' Content-Type': 'application/json' },
    body: JSON.stringify(product),
  };
  return fetch('https://localhose:4000/products/add', requestOptions).then(
    handleResponse
  );
}
