import { fireEvent, render, screen } from '@testing-library/react';

import axios from 'axios';

import Products from '../Products';
import { ToastContainer } from 'react-toastify';

import { productMock, moreProductsMock } from './mocks/productMock';

test('Should render the product card corretly', async () => {
  axios.get.mockImplementation(() => Promise.resolve(productMock));
  render(
    <>
      <Products />
      <ToastContainer />
    </>
  );

  const productName = await screen.findByText(/product number 0/i);

  expect(productName).toBeTruthy();
});

test('Should show more products cards', async () => {
  render(
    <>
      <Products />
      <ToastContainer />
    </>
  );

  axios.get.mockImplementation(() => Promise.resolve(moreProductsMock));
  const button = await screen.findByText(/ainda mais produtos aqui!/i);
  fireEvent.click(button);

  const productName = await screen.findByText('Product Number 0');
  const productName1 = await screen.findByText('Product Number 1');

  expect(productName).toBeTruthy();
  expect(productName1).toBeTruthy();
});
