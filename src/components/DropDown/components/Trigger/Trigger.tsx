import {
  ComponentPropsWithoutRef,
  CSSProperties,
  PropsWithChildren,
  useRef,
} from 'react';
import { getCustomChildren } from '../../../../utils/getCustomChildren';
import { useDropDown } from '../../hooks/useDropDownContext';
import useOnClickOutside from '../../hooks/useOnClickOutside';

export interface TriggerProps extends ComponentPropsWithoutRef<'button'> {
  isCustom?: boolean;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  bgColor?: CSSProperties['backgroundColor'];
  borderRadius?: CSSProperties['borderRadius'];
  shadow?: CSSProperties['boxShadow'];
  externalClick?: VoidFunction;
}

export const Trigger = ({
  isCustom,
  width = '100px',
  height = '50px',
  bgColor = 'transparent',
  borderRadius = '5px',
  shadow = '0 1px 16px 0 rgb(66 66 66 / 10%)',
  children,
  externalClick,
  ...rest
}: PropsWithChildren<TriggerProps>) => {
  const { toggle, close } = useDropDown();

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  useOnClickOutside<HTMLButtonElement>(triggerRef, close);

  const styledElement = {
    width,
    height,
    borderRadius,
    outline: 'none',
    border: 'none',
    backgroundColor: bgColor,
    boxShadow: shadow,
  };

  const onClickTrigger = () => {
    toggle();

    if (!externalClick) return;
    externalClick();
  };

  if (isCustom) {
    return getCustomChildren(children, {
      style: {
        ...styledElement,
      },
      onClick: onClickTrigger,
      ...rest,
    });
  }

  return (
    <button
      ref={triggerRef}
      style={{ ...styledElement }}
      className="trigger"
      onClick={onClickTrigger}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Trigger;
