import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppContent from './AppContent';

describe('<AppContent />', () => {
  test('it should mount', () => {
    render(<AppContent />);
    
    const appContent = screen.getByTestId('AppContent');

    expect(appContent).toBeInTheDocument();
  });
});