import { ElementType } from 'react';
import { Props } from '../../../@types/props.type';
import { getCustomChildren } from '../../../utils/getCustomChildren';
import { useDropDown } from '../hooks/useDropDownContext';


import './style.css';

type OptionsProps = {
  isCustom?: boolean;
};

const Options = <T extends ElementType = 'div'>({
  as,
  isCustom,
  children,
  ...rest
}: Props<T, OptionsProps>) => {
  const Element = as || 'div';
  const { isOpen } = useDropDown();

  if (isCustom) {
    return isOpen
      ? getCustomChildren(children, {
          ...rest,
        })
      : null;
  }

  return isOpen ? (
    <Element className="options" {...rest}>
      {children}
    </Element>
  ) : null;
};

export default Options;
