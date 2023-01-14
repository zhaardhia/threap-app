/**
 * test scenario for Footer
 *
 * - Footer component
 *  - should render Footer component successfully
 *
 */
import { render } from '@testing-library/react';
import Footer from '../Footer';
import '@testing-library/jest-dom';

describe('Footer component', () => {
  it('should render Footer component successfully', async () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
