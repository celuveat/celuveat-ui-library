import { styled, css, CSSObject } from 'styled-components';
import { CSSProperties, ElementType } from 'react';

import { Props } from '../../../@types/props.type';

export interface FlexProps {
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  gap?: CSSProperties['gap'];
  styles?: CSSObject;
}

function Flex<T extends ElementType = 'div'>({
  as,
  direction,
  justify,
  align,
  gap,
  styles,
  children,
  ...attribute
}: Props<T, FlexProps>) {
  const Element = as || 'div';

  return (
    <StyledFlex
      as={Element}
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
      styles={styles}
      {...attribute}
    >
      {children}
    </StyledFlex>
  );
}

export default Flex;

const StyledFlex = styled.div<FlexProps>`
  ${(props) => {
    return css({
      display: 'flex',
      width: '100%',
      height: 'auto',
      flexDirection: props.direction || 'row',
      justifyContent: props.justify || 'start',
      alignItems: props.align || 'auto',
      gap: props.gap || '0px',
      ...props.styles,
    });
  }}
`;
