/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

const RegisterInput = ({ register }) => {
  const [email, onEmailChange] = useInput('');
  const [name, onNameChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="flex flex-col space-y-5">
      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          autoFocus
          className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="text-sm font-semibold text-gray-500">Name</label>
        <input
          type="email"
          id="email"
          value={name}
          onChange={onNameChange}
          autoFocus
          className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
        </div>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
          className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
        />
      </div>
      <div>
        <button
          type="button"
          className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-slate-200 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
          onClick={() => register({ name, email, password })}
        >
          Log in
        </button>
      </div>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;