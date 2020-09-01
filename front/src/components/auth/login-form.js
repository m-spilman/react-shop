import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loginAction } from '../../store/login/action';
import BuildForm from '../form-builder';

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

  const fields = [
    {
      fieldType: 'input',
      type: 'text',
      name: 'username',
      placeholder: 'User Name',
      value: username,
      className: 'form-control',
      title: '',
      onChange: onChange,
      submitted: submitted,
    },
    {
      fieldType: 'input',
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      value: password,
      className: 'form-control',
      title: '',
      onChange: onChange,
      submitted: submitted,
    },
  ];

  return (
    <div className="col-lg-4 offset-lg-4">
      <h2>Login</h2>
      <form name="form" onSubmit={onSubmit}>
        <BuildForm fields={fields} />
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
