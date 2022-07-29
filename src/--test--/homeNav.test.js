import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeNavBar from '../Components/navbar/homeNav';

describe('Tests for the Header component', () => {
  render(
    <Router>
      <HomeNavBar />
    </Router>,
  );
  test('Checks for the price text', () => {
    expect(screen.findByText(' crypto/list')).toBeTruthy();
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
