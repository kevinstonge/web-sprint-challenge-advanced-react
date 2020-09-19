import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});
const testValues = {
  firstName: "Kevin",
  lastName: "St.Onge",
  address: "111 Main Street",
  city: "Anytown",
  state: "Connecticut",
  zip: "06420",
};
test("form shows success message on submit with form details", () => {
  const { getByText, getByTestId, container } = render(<CheckoutForm />);
  const checkoutButton = getByText("Checkout");
  Object.keys(testValues).forEach((k) => {
    const inputField = getByTestId(k);
    fireEvent.change(inputField, { target: { value: testValues[k] } });
  });

  fireEvent.click(checkoutButton);
  expect(container.innerHTML).toMatch("You have ordered some plants!");
  Object.values(testValues).forEach((v) => {
    expect(container.innerHTML).toMatch(v);
  });
});
