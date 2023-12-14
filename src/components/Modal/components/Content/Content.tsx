import { ReactNode, useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from '../../hooks/useModalContext';

export interface ContentProps {
  children: ReactNode;
  portalId: string;
}

const Content = ({ children, portalId }: ContentProps) => {
  const { isModalOpen } = useContext(ModalContext);
  const portal = document.getElementById(portalId);

  return isModalOpen && portal ? createPortal(children, portal) : null;
};

export default Content;
