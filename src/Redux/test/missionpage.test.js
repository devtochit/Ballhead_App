import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// test('fetches & receives a user after clicking the fetch user button', async () => {
//   renderWithProviders(<Missions />)
//    // should show no user initially, and not be fetching a user
//     expect(screen.getByText('Missions')).toBeInTheDocument();
//     expect(screen.getByText('Description')).toBeInTheDocument();
//     expect(screen.getByText('Status')).toBeInTheDocument();
//  })
test(' Test the snapshot', () => {
  expect(screen.debug()).toMatchSnapshot();
});

// test('check when the join btn is click get enable and update the budges', () => {
//   renderWithProviders(<Missions />)
//   expect(
//     fireEvent.click(screen.getAllByText('Join Mission')[0]),
//   ).toBeTruthy();
// });
