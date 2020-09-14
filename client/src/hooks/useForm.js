// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialValues) => {
  const { formValues, setFormValues } = useState(initialValues);

  const changeFormValue = (event) => {
    event.persist();
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  return [changeFormValue, formValues];
};

export default useForm;
