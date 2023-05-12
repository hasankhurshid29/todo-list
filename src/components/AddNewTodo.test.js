import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import AddNewTodo from './AddNewTodo';
import { store } from '../store';

test('renders the AddNewTodo component', () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <AddNewTodo />
    </Provider>
  );

  const inputElement = getByLabelText('Add new todo');
  const addButtonElement = getByText('Add');

  fireEvent.change(inputElement, { target: { value: 'Test todo' } });
  fireEvent.click(addButtonElement);

  expect(inputElement).toHaveValue('');
});
