import { ElementType } from 'react';
import { Props } from '../../../../@types/props.type';
import { getCustomChildren } from '../../../../utils/getCustomChildren';

import './style.css';

type OptionProps = {
  isCustom?: boolean;
  onClick?: VoidFunction;
};

const Option = <T extends ElementType = 'div'>({
  as,
  isCustom,
  children,
  onClick,
  ...rest
}: Props<T, OptionProps>) => {
  const Element = as || 'div';

  const externalClick = () => {
    if (!onClick) return;
    onClick();
  };

  if (isCustom) {
    return getCustomChildren(children, {
      onClick: externalClick,
      ...rest,
    });
  }

  return (
    <Element className="option" onClick={externalClick} {...rest}>
      {children}
    </Element>
  );
};

export default Option;
