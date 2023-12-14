import { ReactNode } from 'react';
import useModalState from '../hooks/useModalState';
import { ModalContext } from '../hooks/useModalContext';

export interface ModalProps {
  isOpen?: boolean;
  children: ReactNode;
}

const Modal = ({ isOpen = false, children }: ModalProps) => {
  const value = useModalState(isOpen);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default Modal;
