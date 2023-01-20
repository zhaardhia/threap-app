/**
 * test scenario for Footer
 *
 * - Footer component
 *  - should render Footer component successfully
 *
 */
import { render } from '@testing-library/react';
import BtnAddThread from '../BtnAddThread';
import '@testing-library/jest-dom';

describe('BtnAddThread component', () => {
  it('should render BtnAddThread component successfully', async () => {
    const { container } = render(<BtnAddThread toggleModal={() => {}} />);
    expect(container).toMatchSnapshot();
  });
});
