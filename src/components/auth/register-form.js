import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { registerAction } from '../../store/register/action';

function RegisterForm() {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const { username, password, firstName, lastName } = inputs;

  const onSubmit = (event) => {
    setSubmitted(true);
    if (username && password && firstName && lastName) {
      dispatch(
        registerAction.register(username, password, firstName, lastName)
      );
    }
    event.preventDefault();
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  return (
    <div className="col-lg-4 offset-lg-4">
      <h2>Register</h2>
      <form name="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={onChange}
            className="form-control"
          />
          {submitted && !firstName && (
            <div className="invalid-feedback d-block">
              First name is required
            </div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={onChange}
            className="form-control"
          />
          {submitted && !lastName && (
            <div className="invalid-feedback d-block">
              Last name is required
            </div>
          )}
        </div>
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
          <button className="btn btn-primary">Register</button>
          <Link to="/" className="btn btn-link">
            cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
export default RegisterForm;
