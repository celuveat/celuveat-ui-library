import { ComponentPropsWithoutRef, PropsWithChildren, useRef } from 'react';
import { getCustomChildren } from '../../../../utils/getCustomChildren';
import { useDropDown } from '../../hooks/useDropDownContext';
import useOnClickOutside from '../../hooks/useOnClickOutside';

import './style.css';

export interface TriggerProps extends ComponentPropsWithoutRef<'button'> {
  isCustom?: boolean;
  onClick?: VoidFunction;
}

export const Trigger = ({
  isCustom,
  children,
  onClick,
  ...rest
}: PropsWithChildren<TriggerProps>) => {
  const { toggle, close } = useDropDown();

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  useOnClickOutside<HTMLButtonElement>(triggerRef, close);

  const externalClick = () => {
    toggle();

    if (!onClick) return;
    onClick();
  };

  if (isCustom) {
    return getCustomChildren(children, {
      ref: triggerRef,
      onClick: externalClick,
      ...rest,
    });
  }

  return (
    <button
      ref={triggerRef}
      className="trigger"
      onClick={externalClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Trigger;
