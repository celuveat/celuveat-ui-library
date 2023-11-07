import React, {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
} from 'react';

export const getCustomChildren = <
  T extends ComponentPropsWithoutRef<ElementType>
>(
  children: React.ReactNode,
  actionProps: T
): React.ReactElement => {
  const child = React.Children.only(children);
  const defaultStyle: CSSProperties = actionProps.style;

  if (!React.isValidElement<T>(child))
    throw Error('React Child is not a React Element');

  return React.cloneElement(child, {
    ...actionProps,
    style: { ...defaultStyle, ...child.props.style },
  });
};
