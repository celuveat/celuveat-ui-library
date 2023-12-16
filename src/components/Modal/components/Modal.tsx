import { createPortal } from 'react-dom';
import useModalStore from '../store/useModalStore';

export interface Props {
  portalId?: string;
}

const Modal = ({ portalId = 'root' }: Props) => {
  const { isModalOpen, currentModalContent } = useModalStore();
  const portal = document.getElementById(portalId);

  return isModalOpen && portal
    ? createPortal(currentModalContent, portal)
    : null;
};

export default Modal;
