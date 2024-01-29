import { styled } from 'styled-components';
import { PropsWithChildren } from 'react';

import { useInput } from './hooks/useInput';
import { InputContext } from './hooks/useInputContext';
import { InputActionContext } from './hooks/useInputActionContext';

interface Props {
  inputName: string;
  inputValue: string;
  validate?: (value: string) => boolean;
}

function Root({
  inputName,
  inputValue,
  validate,
  children,
}: PropsWithChildren<Props>) {
  const {
    name,
    value,
    touched,
    isError,
    handleChange,
    handleFocus,
    handleBlur,
  } = useInput({
    inputName,
    inputValue,
    validate,
  });

  const state = {
    name,
    value,
    touched,
    isError,
  };

  const action = {
    handleChange,
    handleFocus,
    handleBlur,
    validate,
  };

  return (
    <InputContext.Provider value={state}>
      <InputActionContext.Provider value={action}>
        <StyledDropDownWrapper>{children}</StyledDropDownWrapper>
      </InputActionContext.Provider>
    </InputContext.Provider>
  );
}

export default Root;

const StyledDropDownWrapper = styled.div`
  position: relative;
`;
