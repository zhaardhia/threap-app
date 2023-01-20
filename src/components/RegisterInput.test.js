/**
 * test scenario for RegisterInput
 *
 * - RegisterInput component
 *  - should handle username typing correctly
 *  - should handle password typing correctly
 *  - should call login function when login button is clicked
 *
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';
import '@testing-library/jest-dom';

describe('RegisterInput component', () => {
  it('should handle username typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Enter your email');
    // Action
    await userEvent.type(emailInput, 'emailtest');

    // Assert
    expect(emailInput).toHaveValue('emailtest');
  });

  it('should handle name typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Enter your name');

    // Action
    await userEvent.type(nameInput, 'nametest');

    // Assert
    expect(nameInput).toHaveValue('nametest');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Enter your password');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when login button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn();
    render(<RegisterInput register={mockLogin} />);
    const usernameInput = await screen.getByPlaceholderText('Enter your email');
    await userEvent.type(usernameInput, 'usernametest');
    const nameInput = await screen.getByPlaceholderText('Enter your name');
    await userEvent.type(nameInput, 'nametest');
    const passwordInput = await screen.getByPlaceholderText('Enter your password');
    await userEvent.type(passwordInput, 'passwordtest');
    const registerButton = await screen.getByRole('button', { name: 'Register' });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'usernametest',
      name: 'nametest',
      password: 'passwordtest',
    });
  });
});
