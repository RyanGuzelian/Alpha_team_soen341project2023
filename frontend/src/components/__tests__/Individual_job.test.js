import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Individual_Job from '../pages/Individual_Post';
import UserContext from '../../UserContext';
import { MemoryRouter, Route, Router, Routes } from 'react-router-dom';
import React from 'react';
import fetch from 'jest-fetch-mock';

const mockUser = {
  _id: '1234',
};

const mockData = {
  data: {
    myPost: {
    _id:"1",
        selectedCandidates: [ ],
      title: 'Software Developer',
      company: 'Test Company',
      description: 'A great job opportunity',
      location: 'Test City',
      date_posted: '2023-03-22T06:10:34.157Z',
    },
  },
};

fetch.mockResponseOnce(JSON.stringify(mockData));

global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(mockData) }));

describe('Individual_Job component', () => {
  afterEach(() => {
    fetch.resetMocks(); // Reset fetch mocks after each test
  });

  test('renders without crashing', async () => {
    render(
      <UserContext.Provider value={{ user: mockUser }}>
        <MemoryRouter initialEntries={['/jobs/1']}>
          <Routes>
            <Route path="/jobs/:postId" element={<Individual_Job />} />
          </Routes>
        </MemoryRouter>
      </UserContext.Provider>
    );

    await waitFor(() => expect(fetch).toHaveBeenCalled());

    expect(screen.getByText(/Job Title:/i)).toBeInTheDocument();
    expect(screen.getByText(/Company:/i)).toBeInTheDocument();
    expect(screen.getByText(/Job description:/i)).toBeInTheDocument();
    expect(screen.getByText(/Location:/i)).toBeInTheDocument();
    expect(screen.getByText(/Date Posted:/i)).toBeInTheDocument();
  });

  test('handles apply button click', async () => {
    // Reset the fetch mock before the test
    global.fetch.mockClear();
  
    render(
        <UserContext.Provider value={{ user: mockUser }}>
          <MemoryRouter initialEntries={['/jobs/1']}>
            <Routes>
              <Route path="/jobs/:postId" element={<Individual_Job />} />
            </Routes>
          </MemoryRouter>
        </UserContext.Provider>
      );

    await waitFor(() => expect(fetch).toHaveBeenCalled());

    const applyButton = screen.getByRole('button', { name: /apply/i });
    fireEvent.click(applyButton);

    await waitFor(() =>
      expect(screen.getByText(/Applied successfully!/i)).toBeInTheDocument()
    );
  });
});
