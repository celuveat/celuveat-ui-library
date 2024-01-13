import { ElementType } from 'react';
import { styled, css } from 'styled-components';

import type { Props } from '../../../@types/props.type';

export interface GridItemProps {
  xs: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 12;
}

function Item<T extends ElementType = 'div'>({
  as,
  xs,
  children,
  ...attributes
}: Props<T, GridItemProps>) {
  const Element = as || 'div';

  return (
    <StyledItem as={Element} xs={xs} {...attributes}>
      {children}
    </StyledItem>
  );
}

export default Item;

const StyledItem = styled.div<GridItemProps>`
  ${(props) => {
    return css({
      width: '100%',
      gridColumn: `auto / span ${props.xs || 4}`,
    });
  }}
`;
