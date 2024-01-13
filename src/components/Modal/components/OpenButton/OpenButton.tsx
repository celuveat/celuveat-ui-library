import { ComponentPropsWithoutRef } from 'react';
import { getCustomChildren } from '../../../../utils/getCustomChildren';
import { useModalStore } from '../../hooks/modal';

interface OpenButtonProps extends ComponentPropsWithoutRef<'button'> {
  isCustom?: boolean;
  modalContent: string | JSX.Element;
}

function OpenButton({
  isCustom,
  modalContent,
  children,
  ...rest
}: OpenButtonProps) {
  const { openModal } = useModalStore((state) => ({
    openModal: state.openModal,
  }));

  const open = () => {
    openModal({ content: modalContent });
  };

  return isCustom ? (
    getCustomChildren(children, { onClick: { open }, ...rest })
  ) : (
    <button className="open-button" onClick={open}>
      {children}
    </button>
  );
}

export default OpenButton;
