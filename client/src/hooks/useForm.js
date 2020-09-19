// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [enableCheckoutbutton, setEnableCheckoutButton] = useState(false);
  const setValue = (event) => {
    event.persist();
    const newValues = { ...values, [event.target.name]: event.target.value };
    setValues(newValues);
    setEnableCheckoutButton(
      Object.values(newValues).filter((v) => v === "").length === 0
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };
  return [
    values,
    setValue,
    handleSubmit,
    showSuccessMessage,
    enableCheckoutbutton,
  ];
};

export default useForm;
