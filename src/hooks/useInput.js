import { useState } from "react";

export const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const handler = (event) => {
    setValue(event.target.value);
  };
  const reset = () => {
    setValue(initialValue);
  };
  return [value, setValue, handler, reset];
};
