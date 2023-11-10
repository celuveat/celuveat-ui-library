import { CSSProperties, FC, PropsWithChildren } from 'react';

import { DropDownContext } from '../hooks/useDropDownContext';
import useToggle from '../hooks/useToggle';

const Root: FC<PropsWithChildren> = ({ children }) => {
  const { value: isOpen, close, toggle } = useToggle();

  const contextValue = {
    isOpen,
    toggle,
    close,
  };

  const defaultStyledElement: CSSProperties = {
    position: 'relative',
  };

  return (
    <DropDownContext.Provider value={contextValue}>
      <div style={{ ...defaultStyledElement }}>{children}</div>
    </DropDownContext.Provider>
  );
};

export default Root;
