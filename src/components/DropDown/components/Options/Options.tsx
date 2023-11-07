import { CSSProperties, ElementType } from 'react';
import { Props } from '../../../../@types/props.type';
import { getCustomChildren } from '../../../../utils/getCustomChildren';
import { useDropDown } from '../../hooks/useDropDownContext';

type OptionsProps = {
  width?: CSSProperties['width'];
  top?: CSSProperties['top'];
  left?: CSSProperties['left'];
  bgColor?: CSSProperties['background'];
  shadow?: CSSProperties['boxShadow'];
  borderRadius?: CSSProperties['borderRadius'];
  isCustom?: boolean;
};

const Options = <T extends ElementType = 'div'>({
  as,
  isCustom,
  children,
  width = '200px',
  top = '60px',
  left = '0px',
  bgColor = 'white',
  shadow = '0 1px 16px 0 rgb(66 66 66 / 10%)',
  borderRadius = '5px',
  ...rest
}: Props<T, OptionsProps>) => {
  const Element = as || 'div';
  const { isOpen } = useDropDown();

  const styledElement: CSSProperties = {
    position: 'absolute',

    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    zIndex: '1000',

    top,
    width,
    borderRadius,
    boxShadow: shadow,
    background: bgColor,
  };

  if (isCustom) {
    return getCustomChildren(children, {
      style: {
        ...styledElement,
      },
      ...rest,
    });
  }

  return isOpen ? (
    <Element style={{ ...styledElement }} {...rest}>
      {children}
    </Element>
  ) : null;
};

export default Options;
