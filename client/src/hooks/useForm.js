// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const setValue = (event) => {
    event.persist();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };
  return [values, setValue, handleSubmit, showSuccessMessage];
};

export default useForm;
