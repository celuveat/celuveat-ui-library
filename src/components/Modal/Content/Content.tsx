import { ReactNode } from 'react';
import { useModalStore } from '../hooks/modal';

import './style.css';

interface ContentProps {
  children: ReactNode;
}

function Content({ children }: ContentProps) {
  const { isOpen } = useModalStore((state) => ({
    isOpen: state.isOpen,
  }));

  return (
    <div className={`content ${isOpen ? 'open-animation' : 'close-animation'}`}>
      {children}
    </div>
  );
}

export default Content;
