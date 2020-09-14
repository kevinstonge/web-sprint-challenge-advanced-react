import React, { useState } from "react";
import useForm from "../hooks/useForm";
const initialValues = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [values, setValue, handleSubmit, showSuccessMessage] = useForm(
    initialValues
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label htmlFor="firstName">
          First Name:
          <input
            name="firstName"
            id="firstName"
            data-testid="firstName"
            value={values.firstName}
            onChange={setValue}
          />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input
            name="lastName"
            id="lastName"
            data-testid="lastName"
            value={values.lastName}
            onChange={setValue}
          />
        </label>
        <label htmlFor="address">
          Address:
          <input
            name="address"
            id="address"
            data-testid="address"
            value={values.address}
            onChange={setValue}
          />
        </label>
        <label htmlFor="city">
          City:
          <input
            name="city"
            id="city"
            data-testid="city"
            value={values.city}
            onChange={setValue}
          />
        </label>
        <label htmlFor="state">
          State:
          <input
            name="state"
            id="state"
            data-testid="state"
            value={values.state}
            onChange={setValue}
          />
        </label>
        <label htmlFor="zip">
          Zip:
          <input
            name="zip"
            id="zip"
            data-testid="zip"
            value={values.zip}
            onChange={setValue}
          />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo!{" "}
            <span role="img" aria-label="party">
              🎉
            </span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
