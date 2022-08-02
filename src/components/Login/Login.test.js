import { render } from '@testing-library/react';
import App from '../../App';

test("the components are rendered", () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
})