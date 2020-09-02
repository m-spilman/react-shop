import handleResponse from './handle-response';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

export const productService = { addProduct, editProduct, getProducts };

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

async function getProducts() {
  const products = await client.query({
    query: gql`
      query TestQuery {
        products {
          title
          price
          categoryId
          imageUrl
          id
        }
      }
    `,
  });
  console.log('im products ?', products);
  return products.data.products;
}
