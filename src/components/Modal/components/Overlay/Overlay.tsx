import { ReactElement, cloneElement, useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalContext } from '../../hooks/useModalContext';
export interface OverlayProps {
  as: ReactElement;
  portalId: string;
}

const Overlay = ({ as, portalId }: OverlayProps) => {
  const { isModalOpen, closeModal } = useContext(ModalContext);
  const portal = document.getElementById(portalId);

  return isModalOpen && portal
    ? createPortal(cloneElement(as, { onClick: closeModal }), portal)
    : null;
};

export default Overlay;
