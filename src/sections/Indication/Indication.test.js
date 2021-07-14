import { render, fireEvent, screen } from '@testing-library/react';

import { ToastContainer } from 'react-toastify';

import Indication from './Indication';

test('Render the screen correctly', async () => {
  const { container } = render(<Indication />);

  expect(container).toBeTruthy();
});

test('Should validate form information', async () => {
  render(
    <>
      <Indication />
      <ToastContainer />
    </>
  );

  const nameInput = await screen.findByLabelText(/nome do seu amigo/i);
  fireEvent.change(nameInput, { target: { value: 'Ana' } });

  const emailInput = screen.getByLabelText(/e-mail/i);
  fireEvent.change(emailInput, { target: { value: 'ana@email.com' } });

  const button = screen.getByText(/enviar agora/i);
  fireEvent.click(button);

  const toast = await screen.findByText(/informações enviadas com sucesso!/i);

  expect(toast).toBeTruthy();
});
