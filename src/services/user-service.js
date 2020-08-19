import handleResponse from './handle-response';

export const userService = {
  login,
  logout,
  register,
};

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };
  return fetch('/users/authenticate', requestOptions)
    .then(handleResponse)
    .then((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    });
}

function logout() {
  localStorage.removeItem('user');
}

function register(username, password, firstName, lastName) {
  const requestOptions = {
    method: 'POST',
    headers: { 'content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, username, password }),
  };
  return fetch('/users/register', requestOptions).then(handleResponse);
}
