import { fireEvent, waitFor, render, screen } from '@testing-library/react';
import Results from '../Results';
test('need to run the handler on button click', async () => {
  render( <Results/>);
  let Counts = screen.getByText('Counts:');
  expect(Counts).toBeInTheDocument();
});