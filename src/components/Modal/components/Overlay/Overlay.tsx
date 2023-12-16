import { ReactElement, cloneElement } from 'react';
import useModalStore from '../../store/useModalStore';

export interface OverlayProps {
  as: ReactElement;
}

const Overlay = ({ as }: OverlayProps) => {
  const { closeModal } = useModalStore();

  return cloneElement(as, { onClick: closeModal });
};

export default Overlay;
