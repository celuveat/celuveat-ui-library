import {
  Children,
  Fragment,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';
import Item from '../Item';

export const getChildrenForGridItem = (
  children: ReactElement[] | ReactNode
) => {
  return Children.map(children, (child) => {
    if (
      isValidElement(child) &&
      (child.type === Item || child.type === Fragment)
    ) {
      return child;
    }

    throw new Error('Gird 자식 요소에는 반드시 GridItem이 들어와야 합니다!!');
  });
};
