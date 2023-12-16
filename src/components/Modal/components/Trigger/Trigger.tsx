import { ReactElement, cloneElement } from 'react';
import useModalStore from '../../store/useModalStore';

export interface TriggerProps {
  as: ReactElement;
}

const Trigger = ({ as }: TriggerProps) => {
  const { openModal } = useModalStore();

  if (as.props.onClick) {
    const onClick = () => {
      as.props.onClick();
      openModal({ content: null });
    };

    return cloneElement(as, { onClick });
  }

  return cloneElement(as, { onClick: openModal });
};

export default Trigger;
