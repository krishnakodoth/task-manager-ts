import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import App from "../App"

/**
 * @jest-environment jsdom
 */
describe('App component', () => {
  // beforeAll(() => {
  //   render(<App />)
  // });

  test('should render App component', () => {
    // const message = 'Hello World';
    render(<App />)
    expect(true).toBeTruthy()
  })
});