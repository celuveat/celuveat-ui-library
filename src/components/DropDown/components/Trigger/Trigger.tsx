import { ComponentPropsWithoutRef, PropsWithChildren, useRef } from 'react';
import { getCustomChildren } from '../../../../utils/getCustomChildren';
import { useDropDown } from '../../hooks/useDropDownContext';
import useOnClickOutside from '../../hooks/useOnClickOutside';

import './style.css';

export interface TriggerProps extends ComponentPropsWithoutRef<'button'> {
  isCustom?: boolean;
  externalClick?: VoidFunction;
}

export const Trigger = ({
  isCustom,
  children,
  externalClick,
  ...rest
}: PropsWithChildren<TriggerProps>) => {
  const { toggle, close } = useDropDown();

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  useOnClickOutside<HTMLButtonElement>(triggerRef, close);

  const onClick = () => {
    toggle();

    if (!externalClick) return;
    externalClick();
  };

  if (isCustom) {
    return getCustomChildren(children, {
      ref: triggerRef,
      onClick,
      ...rest,
    });
  }

  return (
    <button ref={triggerRef} className="trigger" onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Trigger;
