import { ComponentPropsWithoutRef } from 'react';
import { getCustomChildren } from '../../../../utils/getCustomChildren';
import { useModalStore } from '../../hooks/modal';

interface OpenButtonProps extends ComponentPropsWithoutRef<'button'> {
  isCustom?: boolean;
  title: string;
  modalContent: string | JSX.Element;
}

function OpenButton({
  isCustom,
  title,
  modalContent,
  children,
  ...rest
}: OpenButtonProps) {
  const { openModal } = useModalStore((state) => ({
    openModal: state.openModal,
  }));

  const open = () => {
    openModal({ content: modalContent, title });
  };

  return isCustom ? (
    getCustomChildren(children, { onClick: open, ...rest })
  ) : (
    <button className="open-button" onClick={open}>
      {children}
    </button>
  );
}

export default OpenButton;
