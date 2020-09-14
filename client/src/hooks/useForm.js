// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const setValue = (event) => {
    event.persist();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return [values, setValue];
};

export default useForm;
