import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';
import SignUp from '../SignUp';

test('signs up new user', async () => {
  render(<SignUp />);

  const emailInput = screen.getByRole('textbox', {
    name: 'Email',
  });
  // const passwordInput = screen.getByRole('textbox', {
  //   name: 'Password',
  // });

  const signUpButton = screen.getByRole('button', { name: 'Sign up' });

  // await fireEvent.clear(emailInput);
  await fireEvent.change(emailInput, { target: { value: 'test@123.com' } });
  expect(emailInput.value).toBe('test@123.com');

  // await fireEvent.change(passwordInput, { target: { value: '123456' } });
  // expect(emailInput.value).toBe('123456');
});
