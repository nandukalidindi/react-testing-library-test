import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText, getByLabelText } = render(<App />);

  getByText("TODOS");
  getByLabelText("What needs to be done?");
  getByText("Add #1");
});

test("allows users to add items to their list", () => {
  const { getByText, getByLabelText } = render(<App />);

  const input = getByLabelText("What needs to be done?");
  const button = getByText("Add #1");

  // Simulate user events
  fireEvent.change(input, { target: { value: "Learn spanish" } });
  fireEvent.click(button);

  // Make assertion
  getByText("Learn spanish");
  getByText("Add #2");
});
