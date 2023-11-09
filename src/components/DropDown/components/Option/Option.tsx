import { ElementType } from 'react';
import { Props } from '../../../../@types/props.type';
import { getCustomChildren } from '../../../../utils/getCustomChildren';

import './style.css';

type OptionProps = {
  isCustom?: boolean;
  externalClick?: VoidFunction;
};

const Option = <T extends ElementType = 'div'>({
  as,
  isCustom,
  children,
  externalClick,
  ...rest
}: Props<T, OptionProps>) => {
  const Element = as || 'div';

  const onClickOption = () => {
    if (!externalClick) return;
    externalClick();
  };

  if (isCustom) {
    return getCustomChildren(children, {
      className: 'option',
      onClick: onClickOption,
      ...rest,
    });
  }

  return (
    <Element className="option" onClick={onClickOption} {...rest}>
      {children}
    </Element>
  );
};

export default Option;
