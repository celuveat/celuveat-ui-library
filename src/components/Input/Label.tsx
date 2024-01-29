import { ComponentPropsWithoutRef } from 'react';
import { styled, css, CSSObject } from 'styled-components';
import { useInputContext } from './hooks/useInputContext';

interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  text: string;
  customStyle?: CSSObject;
}

function Label({ customStyle, text, ...rest }: LabelProps) {
  const { name } = useInputContext();

  return (
    <StyledLabel htmlFor={name} customStyle={customStyle} {...rest}>
      {text}
    </StyledLabel>
  );
}

export default Label;

const StyledLabel = styled.label<{ customStyle?: CSSObject }>`
  ${(props) => {
    return css({
      ...props.customStyle,
    });
  }}
`;
