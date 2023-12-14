import { ReactElement, cloneElement, useContext } from 'react';
import { ModalContext } from '../../hooks/useModalContext';

export interface TriggerProps {
  as: ReactElement;
}

const Trigger = ({ as }: TriggerProps) => {
  const { openModal } = useContext(ModalContext);

  if (as.props.onClick) {
    const onClick = () => {
      as.props.onClick();
      openModal();
    };

    return cloneElement(as, { onClick });
  }

  return cloneElement(as, { onClick: openModal });
};

export default Trigger;
