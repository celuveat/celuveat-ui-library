import { ReactElement, cloneElement, useContext } from 'react';
import { ModalContext } from '../../hooks/useModalContext';

export interface TriggerProps {
  as: ReactElement;
}

const Trigger = ({ as }: TriggerProps) => {
  const { openModal } = useContext(ModalContext);

  return cloneElement(as, { onClick: openModal });
};

export default Trigger;
