// App.spec.jsx
import { describe, it, afterEach, expect } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import App from './App';

afterEach(() => {
  cleanup();
});

describe('App.tsx', () => {
  it('home test', () => {
    render(<App />);

    expect(screen.getByText('home test')).toBeInTheDocument();
  });
});
