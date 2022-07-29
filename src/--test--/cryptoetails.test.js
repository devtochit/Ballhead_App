import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CrypoDetails from '../Components/navbar/detailsNav';

describe('Tests for the Header component', () => {
  render(
    <Router>
      <CrypoDetails />
    </Router>,
  );
  test('Checks for the price text', () => {
    expect(screen.findByText(' crypto/details')).toBeTruthy();
  });
  test(' Test the snapshot', () => {
    expect(screen.debug()).toMatchSnapshot();
  });
  // test('check for the rockets link text', () => {
  //     expect(screen.findByText('Rockets')).toBeTruthy();
  // });
  // test('check for the missions link text', () => {
  //     expect(screen.findByText('Missions')).toBeTruthy();
  // });

  // test('check for the profiles link text', () => {
  //     expect(screen.findByText('My Profile')).toBeTruthy();
  // });
});
