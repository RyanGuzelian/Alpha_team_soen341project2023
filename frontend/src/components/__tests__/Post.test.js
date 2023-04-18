import { render, screen } from '@testing-library/react';
import React from 'react'
import Post from '../pages/Post';
import UserContext from '../../UserContext';
import { BrowserRouter } from 'react-router-dom';

const mockUser = {
  _id: '1234',
  User_type: 'employer',
};

describe('Post component', () => {
  test('renders without crashing', () => {
    render(
      <UserContext.Provider value={{ user: mockUser }}>
        <BrowserRouter>
          <Post />
        </BrowserRouter>
      </UserContext.Provider>
    );
  });

  test('displays form elements for employer', () => {
    render(
      <UserContext.Provider value={{ user: mockUser }}>
        <BrowserRouter>
          <Post />
        </BrowserRouter>
      </UserContext.Provider>
    );

    const titleInput = screen.getByLabelText(/title/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const locationInput = screen.getByLabelText(/location/i);
    const postButton = screen.getByRole('button', { name: /post/i });

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(locationInput).toBeInTheDocument();
    expect(postButton).toBeInTheDocument();
  });
});
