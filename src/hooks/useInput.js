import { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");
  const handler = (event) => {
    setValue(event.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, setValue, handler, reset];
};
