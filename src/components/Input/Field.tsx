import {
  ComponentPropsWithoutRef,
  forwardRef,
  Ref,
  useImperativeHandle,
  useRef,
} from 'react';
import { styled, CSSObject, css } from 'styled-components';

import { useInputActionContext } from './hooks/useInputActionContext';
import { useInputContext } from './hooks/useInputContext';

export interface FieldProps extends ComponentPropsWithoutRef<'input'> {
  as?: React.HTMLInputTypeAttribute;
  customStyle?: CSSObject;
}

function Field(
  { as, customStyle, ...rest }: FieldProps,
  ref: Ref<HTMLInputElement>
) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { name, value } = useInputContext();
  const { handleBlur, handleChange, handleFocus, validate } =
    useInputActionContext();

  useImperativeHandle(
    ref,
    (): any => ({
      focus: () => {
        inputRef.current?.focus();
      },

      checkValidity: () => {
        if (validate) {
          return validate(inputRef.current?.value ?? '');
        }

        return true;
      },

      scrollIntoView: () => {
        inputRef.current?.scrollIntoView();
      },
    }),
    [inputRef]
  );

  return (
    <StyledField
      id={name}
      type={as || 'text'}
      ref={inputRef}
      value={value}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onChange={handleChange}
      customStyle={customStyle}
      {...rest}
    />
  );
}

export default forwardRef(Field);

const StyledField = styled.input<{ customStyle?: CSSObject }>`
  ${(props) => {
    return css({
      ...props.customStyle,
    });
  }}
`;
