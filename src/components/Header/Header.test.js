import { fireEvent, render, screen } from '@testing-library/react';

import Header from './Header';
import { ToastContainer } from 'react-toastify';

window.open = jest.fn();

test('Should go to https://www.linx.com.br/', async () => {
  render(<Header />);

  const button = await screen.findByText(/conheça a linx/i);
  fireEvent.click(button);

  expect(window.open).toHaveBeenCalledWith('https://www.linx.com.br/');
});

test('Should show info toast', async () => {
  render(
    <>
      <Header />
      <ToastContainer />
    </>
  );

  const button = await screen.findByText(/ajude o algorítimo/i);
  fireEvent.click(button);

  const toast = await screen.findByText(
    /é só preencher o formulário abaxio 😉/i
  );

  expect(toast).toBeTruthy();
});

test('Should show product info toast', async () => {
  render(
    <>
      <Header />
      <ToastContainer />
    </>
  );

  const button = await screen.findByText(/seus produtos/i);
  fireEvent.click(button);

  const toast = await screen.findByText(/não há nenhum produto disponível/i);

  expect(toast).toBeTruthy();
});

test('Should go to https://www.linkedin.com/in/ana-paula-loureiro-berg-61263b1a1/', async () => {
  render(<Header />);

  const button = await screen.findByText(/compartilhe/i);
  fireEvent.click(button);

  expect(window.open).toHaveBeenCalledWith(
    'https://www.linkedin.com/in/ana-paula-loureiro-berg-61263b1a1/'
  );
});
