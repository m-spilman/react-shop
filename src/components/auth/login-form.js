import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loginAction } from '../../store/login/action';

function LoginForm() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginAction.logout());
  }, [dispatch]);

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;

  const onSubmit = (event) => {
    setSubmitted(true);
    if (username && password) {
      dispatch(loginAction.login(username, password));
    }
    event.preventDefault();
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  return (
    <div className="col-lg-4 offset-lg-4">
      <h2>Login</h2>
      <form name="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={onChange}
            className="form-control"
          />
          {submitted && !username && (
            <div className="invalid-feedback d-block">Username is required</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            className="form-control"
          />
          {submitted && !password && (
            <div className="invalid-feedback d-block">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Login</button>
          <Link to="/register" className="btn btn-link">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
