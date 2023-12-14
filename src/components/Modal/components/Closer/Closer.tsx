import { ReactElement, cloneElement, useContext } from 'react';
import { ModalContext } from '../../hooks/useModalContext';

export interface CloserProps {
  as: ReactElement;
}

const Closer = ({ as }: CloserProps) => {
  const { closeModal } = useContext(ModalContext);

  if (as.props.onClick) {
    const onClick = () => {
      as.props.onClick();
      closeModal();
    };

    return cloneElement(as, { onClick });
  }

  return cloneElement(as, { onClick: closeModal });
};

export default Closer;
