import { styled, css, CSSObject } from 'styled-components';
import { useInputContext } from './hooks/useInputContext';

interface ErrorMessageProps {
  message: string;
  customStyle?: CSSObject;
}

function ErrorMessage({ message, customStyle }: ErrorMessageProps) {
  const { isError, touched } = useInputContext();

  if (!isError) return null;

  if (!touched) return null;

  return (
    <StyledErrorMessage customStyle={customStyle}>{message}</StyledErrorMessage>
  );
}

export default ErrorMessage;

const StyledErrorMessage = styled.label<{ customStyle?: CSSObject }>`
  ${(props) => {
    return css({
      ...props.customStyle,
    });
  }}
`;
