import { CSSProperties, ElementType } from 'react';
import { Props } from '../../../../@types/props.type';
import { getCustomChildren } from '../../../../utils/getCustomChildren';

type OptionProps = {
  style?: CSSProperties;
  bgColor?: CSSProperties['backgroundColor'];
  padding?: CSSProperties['padding'];
  isCustom?: boolean;
  externalClick?: VoidFunction;
};

const Option = <T extends ElementType = 'div'>({
  as,
  isCustom,
  children,
  bgColor = 'transparent',
  padding = '1rem',
  externalClick,
  ...rest
}: Props<T, OptionProps>) => {
  const Element = as || 'div';

  const styledElement: CSSProperties = {
    padding,
    backgroundColor: bgColor,
  };

  const onClickOption = () => {
    if (!externalClick) return;
    externalClick();
  };

  if (isCustom) {
    return getCustomChildren(children, {
      style: {
        ...styledElement,
      },
      onClick: onClickOption,
      ...rest,
    });
  }

  return (
    <Element
      style={{ ...styledElement }}
      className="option"
      onClick={onClickOption}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Option;
