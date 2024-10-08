import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '@/components/counter/counter';

describe('Counter component', () => {
  it('should render', () => {

    render(<Counter />);

    const counterDiv = screen.getByTestId('counter-value');

    expect(counterDiv).toHaveTextContent('0');
  });

  it('should increment count on increment click', async () => {
    const user = userEvent.setup();

    render(<Counter />);

    const counterDiv = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment');

    await user.click(incrementButton);

    expect(counterDiv).toHaveTextContent('1');
  });
  //
});
