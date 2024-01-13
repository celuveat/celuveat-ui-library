import { CSSProperties, ElementType } from 'react';
import { styled, css } from 'styled-components';

import { getChildrenForGridItem } from './method';

import type { Props } from '../../../@types/props.type';

export interface GridLayoutProps {
  gap?: CSSProperties['gap'];
  placeItems?: CSSProperties['placeItems'];
}

function Layout<T extends ElementType = 'div'>({
  as,
  gap,
  placeItems,
  children,
  ...attributes
}: Props<T, GridLayoutProps>) {
  const Element = as || 'div';
  return (
    <StyledLayout
      as={Element}
      gap={gap}
      placeItems={placeItems}
      {...attributes}
    >
      {getChildrenForGridItem(children)}
    </StyledLayout>
  );
}

export default Layout;

const StyledLayout = styled.div<GridLayoutProps>`
  ${(props) => {
    return css({
      display: 'grid',
      width: '100%',
      height: 'auto',
      gridTemplateColumns: `repeat(12, minmax(0, 1fr))`,
      gap: props.gap || '4px',
      placeItems: props.placeItems || 'center',
    });
  }}
`;
