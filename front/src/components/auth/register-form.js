import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { registerAction } from '../../store/register/action';
import BuildForm from '../form-builder';

function RegisterForm() {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const [submitted, setSubmitted] = useState(false);

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

  const { username, password, firstName, lastName } = inputs;

  const fields = [
    {
      fieldType: 'input',
      type: 'text',
      name: 'firstName',
      placeholder: 'First Name',
      value: firstName,
      className: 'form-control',
      title: '',
      onChange: onChange,
      submitted: submitted,
    },
    {
      fieldType: 'input',
      type: 'text',
      name: 'lastName',
      placeholder: 'Last Name',
      value: lastName,
      className: 'form-control',
      title: '',
      onChange: onChange,
      submitted: submitted,
    },
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
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <BuildForm fields={fields} />

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
