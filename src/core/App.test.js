import { render } from '@testing-library/react';

import App from './App';

test('Render the screen correctly', async () => {
  const { container } = render(<App />);

  expect(container).toBeTruthy();
});
