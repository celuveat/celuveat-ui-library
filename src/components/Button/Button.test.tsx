import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Button from '.';

describe('Button', () => {
  afterEach(() => cleanup());

  it('renders', () => {
    render(<Button text="hi" />);
    const button = screen.getByText('hi');

    expect(button).toBeInTheDocument();
  });
});
