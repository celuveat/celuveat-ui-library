import { useState } from 'react';

const useToggle = (defaultValue?: boolean) => {
  const [value, setValue] = useState(!!defaultValue);

  const close = () => {
    setValue(false);
  };

  const toggle = () => {
    setValue((preValue) => !preValue);
  };

  return { value, close, toggle };
};

export default useToggle;
