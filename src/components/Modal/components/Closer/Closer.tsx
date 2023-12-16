import { ReactElement, cloneElement } from 'react';
import useModalStore from '../../store/useModalStore';

export interface CloserProps {
  as: ReactElement;
}

const Closer = ({ as }: CloserProps) => {
  const { closeModal } = useModalStore();

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
