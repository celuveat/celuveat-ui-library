import {
  ReactNode,
  ReactElement,
  Children,
  isValidElement,
  MutableRefObject,
  cloneElement,
} from 'react';

import Input from '../../Input';

import { cloneElementWithRef } from '../../../utils/cloneElementWithRef';

export const getChildrenForInputRef = (
  children: ReactNode | ReactElement[],
  refs: MutableRefObject<(HTMLInputElement | null)[]>
) => {
  return Children.map(children, (parentChild, id) => {
    if (!(isValidElement(parentChild) && parentChild.type === Input))
      return parentChild;

    return cloneElement(
      parentChild,
      {},
      Children.map(parentChild.props.children, (child) => {
        if (!(isValidElement(child) && child.type === Input.Field))
          return child;

        return cloneElementWithRef(child, {
          ref: (el) => (refs.current[id] = el),
        });
      })
    );
  });
};
