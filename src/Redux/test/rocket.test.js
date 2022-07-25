import { screen } from '@testing-library/react';

// test('fetches & receives a user after clicking the fetch user button', async () => {
//   renderWithProviders(<ULRocket />)
//    // should show no user initially, and not be fetching a user
//    expect(screen.getByText('Falcon 1')).toBeInTheDocument()
//    expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()

//   //  // after clicking the 'Fetch user' button, it should now show that it is fetching the user
//   //  fireEvent.click(screen.getByRole('button', { name: /Fetch user/i }))
//   //  expect(screen.getByText(/no user/i)).toBeInTheDocument()

//   //  // after some time, the user should be received
//   //  expect(await screen.findByText(/John Smith/i)).toBeInTheDocument()
//   //  expect(screen.queryByText(/no user/i)).not.toBeInTheDocument()
//   //  expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument()
//  })

test(' Test the snapshot', () => {
  expect(screen.debug()).toMatchSnapshot();
});
