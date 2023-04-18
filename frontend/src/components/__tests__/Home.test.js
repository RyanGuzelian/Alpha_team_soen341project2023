// src/components/__tests__/Hello.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/Home'

describe('Home component', () => {
    test('renders without crashing', () => {
      const { getByText } = render(<Home />);
      const welcomeText = getByText('Welcome to HirED!');
      expect(welcomeText).toBeInTheDocument();
    });
  });