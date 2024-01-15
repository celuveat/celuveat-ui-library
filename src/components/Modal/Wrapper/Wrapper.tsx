import { ReactNode, useEffect } from 'react';
import { useModalStore } from '../hooks/modal';

import './style.css';

interface WrapperProps {
  children: ReactNode;
  isBottom?: boolean;
  blockScrollOnMount?: boolean;
}

function Wrapper({
  children,
  isBottom = false,
  blockScrollOnMount = false,
}: WrapperProps) {
  const { isOpen, closeModal } = useModalStore((state) => ({
    isOpen: state.isOpen,
    closeModal: state.closeModal,
  }));

  useEffect(() => {
    if (blockScrollOnMount) document.body.style.overflow = 'hidden';
    window.addEventListener('keyup', (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    });

    return () => {
      document.body.style.removeProperty('overflow');
      window.removeEventListener('keyup', (event) => {
        if (event.keyCode === 27) {
          closeModal();
        }
      });
    };
  }, [blockScrollOnMount]);

  return (
    <div
      className={`wrapper ${isBottom ? 'bottom' : 'center'} ${
        isOpen ? 'open-modal' : 'close-modal'
      }`}
    >
      {children}
    </div>
  );
}

export default Wrapper;
