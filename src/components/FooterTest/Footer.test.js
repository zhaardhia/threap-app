import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import '@testing-library/jest-dom';

describe('Footer component', () => {
  it('renders successfully', async () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
