import { render, fireEvent, screen } from '@testing-library/react';

import { ToastContainer } from 'react-toastify';

import Information from './Information';

test('Render the screen correctly', async () => {
  const { container } = render(<Information />);

  expect(container).toBeTruthy();
});

test('Should validate form information', async () => {
  render(
    <>
      <Information />
      <ToastContainer />
    </>
  );

  const nameInput = await screen.findByLabelText(/nome/i);
  fireEvent.change(nameInput, { target: { value: 'Ana' } });

  const emailInput = screen.getByLabelText(/e-mail/i);
  fireEvent.change(emailInput, { target: { value: 'ana@email.com' } });

  const cpfInput = screen.getByLabelText(/cpf/i);
  fireEvent.change(cpfInput, { target: { value: '000.000.000-00' } });

  const sexRadio = screen.getByLabelText(/masculino/i);
  fireEvent.click(sexRadio);

  const button = screen.getByText(/enviar/i);
  fireEvent.click(button);

  const toast = await screen.findByText(/informações enviadas com sucesso!/i);

  expect(toast).toBeTruthy();
});
