import { render, screen, fireEvent } from '@testing-library/react';
import PasswordValidator from './index';


it("should render list item based on prop that was passed in", () => {
  render(<PasswordValidator options={["hasNumber"]} />);
  const listElement = screen.getByText(/Has a Number 0-9/i)
  expect(listElement).toBeInTheDocument()
});

it("should not render list item if prop was not passed in", () => {
  render(<PasswordValidator options={["hasNumber"]} />);
  const listElement = screen.queryByText(/Has uppercase Letter/i)
  expect(listElement).toBe(null)
});

// test for numbers

it("should show a check mark when password contains a number with the hasNumber test", () => {
  const {getByText} = render(<PasswordValidator options={["hasNumber"]}/>);
  const passwordInput = screen.getByLabelText("Password");
  fireEvent.change(passwordInput, {target: {value: "test12"}})
  expect(getByText("✓")).toBeInTheDocument()
})

it("should show an X when password does not contain a number with the hasNumber test", () => {
  const {getByText} = render(<PasswordValidator options={["hasNumber"]}/>);
  const passwordInput = screen.getByLabelText("Password");
  fireEvent.change(passwordInput, {target: {value: "test"}})
  expect(getByText("X")).toBeInTheDocument()
})

// test for upper case letters

it("should show a check mark when password contains an uppercase letter with the hasUpperCase test", () => {
  const {getByText} = render(<PasswordValidator options={["hasUpperCase"]}/>);
  const passwordInput = screen.getByLabelText("Password");
  fireEvent.change(passwordInput, {target: {value: "Test"}})
  expect(getByText("✓")).toBeInTheDocument()
})

it("should show an X when password does not contain an uppercase letter with the hasUpperCase test", () => {
  const {getByText} = render(<PasswordValidator options={["hasUpperCase"]}/>);
  const passwordInput = screen.getByLabelText("Password");
  fireEvent.change(passwordInput, {target: {value: "test"}})
  expect(getByText("X")).toBeInTheDocument()
})

// test for special characters

it("should show a check mark when password contains a special character with the hasSpecialChar test", () => {
  const {getByText} = render(<PasswordValidator options={["hasSpecialChar"]}/>);
  const passwordInput = screen.getByLabelText("Password");
  fireEvent.change(passwordInput, {target: {value: "test!"}})
  expect(getByText("✓")).toBeInTheDocument()
})

it("should show an X when password does not contain a special character with the hasSpecialChar test", () => {
  const {getByText} = render(<PasswordValidator options={["hasSpecialChar"]}/>);
  const passwordInput = screen.getByLabelText("Password");
  fireEvent.change(passwordInput, {target: {value: "test"}})
  expect(getByText("X")).toBeInTheDocument()
})

// test for consecutive letters

it("should show a check mark when password does not contain consecutive letters with the noConsecutiveLetters test", () => {
  const {getByText} = render(<PasswordValidator options={["noConsecutiveLetters"]}/>);
  const passwordInput = screen.getByLabelText("Password");
  fireEvent.change(passwordInput, {target: {value: "test"}})
  expect(getByText("✓")).toBeInTheDocument()
})

it("should show an X when password contains consecutive letters with the noConsecutiveLetters test", () => {
  const {getByText} = render(<PasswordValidator options={["noConsecutiveLetters"]}/>);
  const passwordInput = screen.getByLabelText("Password");
  fireEvent.change(passwordInput, {target: {value: "testt"}})
  expect(getByText("X")).toBeInTheDocument()
})

