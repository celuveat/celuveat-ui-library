import React, { useEffect, RefObject } from 'react';

const isValidEvent = (event: Event, ref: React.RefObject<HTMLElement>) => {
  const target = event.target as HTMLElement;

  if (target) {
    const doc = getOwnerDocument(target);
    if (!doc.contains(target)) return false;
  }

  return !ref.current?.contains(target);
};

const getOwnerDocument = (node?: Element | null): Document => {
  return node?.ownerDocument ?? document;
};

export default function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event?: Event | MouseEvent) => void
) {
  useEffect(() => {
    const onClickHandler = (event: MouseEvent) => {
      if (handler && isValidEvent(event, ref)) handler(event);
    };

    const onTouchHandler = (event: TouchEvent) => {
      if (handler && isValidEvent(event, ref)) handler(event);
    };

    window.addEventListener('click', onClickHandler);
    window.addEventListener('touchstart', onTouchHandler);
    return () => {
      window.removeEventListener('click', onClickHandler);
      window.removeEventListener('touchstart', onTouchHandler);
    };
  }, [ref, handler]);
}
