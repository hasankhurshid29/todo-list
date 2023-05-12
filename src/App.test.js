import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';


describe('With React Testing Library', () => {
  it('Shows "Hello world!"', () => {
    const { getByText } = render(<Provider store={store}><App /></Provider>)
    const headerElement = getByText(/ToDo List/i);
    expect(headerElement).toBeInTheDocument();
  })
})
