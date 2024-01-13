import { ComponentPropsWithoutRef } from 'react';
import { getCustomChildren } from '../../../../utils/getCustomChildren';
import { useModalStore } from '../../hooks/modal';

interface CloseButtonProps extends ComponentPropsWithoutRef<'button'> {
  isCustom: boolean;
}

function CloseButton({ isCustom, children, ...rest }: CloseButtonProps) {
  const { closeModal } = useModalStore((state) => ({
    closeModal: state.closeModal,
  }));

  return isCustom ? (
    getCustomChildren(children, { onClick: closeModal, ...rest })
  ) : (
    <button className="close-button">{children}</button>
  );
}

export default CloseButton;
