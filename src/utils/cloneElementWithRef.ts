import { ReactElement, cloneElement } from 'react';

export const cloneElementWithRef = (
  element: ReactElement,
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return cloneElement(element, props);
};
