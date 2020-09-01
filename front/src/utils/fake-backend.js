import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

let users = JSON.parse(localStorage.getItem('users')) || [];
// let products = JSON.parse(localStorage.getItem('products')) || [];

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       query TestQuery {
//         products {
//           title
//           price
//         }
//       }
//     `,
//   })
//   .then((result) => {
//     console.log(result.data.products);
// products = result.data.products;
// });
let products = retrieveProducts();
async function retrieveProducts() {
  const products = await client.query({
    query: gql`
      query TestQuery {
        products {
          title
          price
        }
      }
    `,
  });
  return products;
}

// products = client
// .query({
//   query: gql`
//     query TestQuery {
//       products {
//         title
//         price
//       }
//     }
//   `,
// })

export function configureFakeBackend() {
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    const { method, headers } = opts;
    const body = opts.body && JSON.parse(opts.body);

    return new Promise((resolve, reject) => {
      setTimeout(handleRoute, 500);

      function handleRoute() {
        switch (true) {
          case url.endsWith('/products/add') && method === 'POST':
            return addProduct();
          case url.endsWith('/product/edit') && method === 'PUT':
            return editProduct();
          case url.endsWith('/users/authenticate') && method === 'POST':
            return authenticate();
          case url.endsWith('/users/register') && method === 'POST':
            return register();
          case url.endsWith('/users') && method === 'GET':
            return getUsers();
          case url.match(/\/users\/\d+$/) && method === 'DELETE':
            return deleteUser();
          default:
            return realFetch(url, opts)
              .then((response) => resolve(response))
              .catch((error) => reject(error));
        }
      }

      function addProduct() {
        const product = body;
        product.id = products.length
          ? Math.max(...products.map((newProduct) => newProduct.id)) + 1
          : 1;
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        return ok();
      }
      function editProduct() {
        const product = body;
        let index = product.id - 1;
        products[index] = product;
        localStorage.setItem('products', JSON.stringify(products));
        return ok();
      }

      function authenticate() {
        const { username, password } = body;
        const user = users.find(
          (user) => user.username === username && user.password === password
        );

        if (!user) return error('Username or password is incorrect');
        return ok({
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          token: 'fake-jwt-token',
        });
      }

      function register() {
        const user = body;

        if (
          users.find((existingUser) => existingUser.username === user.username)
        ) {
          return error(`Username  ${user.username} is already taken`);
        }

        user.id = users.length
          ? Math.max(...users.map((newUser) => newUser.id)) + 1
          : 1;
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        return ok();
      }

      function getUsers() {
        if (!isLoggedIn()) return unauthorized();

        return ok(users);
      }

      function deleteUser() {
        if (!isLoggedIn()) return unauthorized();

        users = users.filter((currentUser) => currentUser.id !== idFromUrl());
        localStorage.setItem('users', JSON.stringify(users));
        return ok();
      }

      function ok(body) {
        resolve({
          ok: true,
          text: () => Promise.resolve(JSON.stringify(body)),
        });
      }

      function unauthorized() {
        resolve({
          status: 401,
          text: () =>
            Promise.resolve(JSON.stringify({ message: 'Unauthorized' })),
        });
      }

      function error(message) {
        resolve({
          status: 400,
          text: () => Promise.resolve(JSON.stringify({ message })),
        });
      }

      function isLoggedIn() {
        return headers['Authorization'] === 'Bearer fake-jwt-token';
      }

      function idFromUrl() {
        const urlParts = url.split('/');
        return parseInt(urlParts[urlParts.length - 1]);
      }
    });
  };
}
