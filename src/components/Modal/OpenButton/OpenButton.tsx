import { ComponentPropsWithoutRef } from 'react';
import { styled } from 'styled-components';

import { useModalStore } from '../hooks/modal';
import { getCustomChildren } from '../../../utils/getCustomChildren';

interface OpenButtonProps extends ComponentPropsWithoutRef<'button'> {
  isCustom?: boolean;
  modalTitle: string;
  modalContent: string | JSX.Element;
}

function OpenButton({
  isCustom,
  modalTitle,
  modalContent,
  children,
  ...rest
}: OpenButtonProps) {
  const { openModal } = useModalStore((state) => ({
    openModal: state.openModal,
  }));

  const open = () => {
    openModal({ content: modalContent, title: modalTitle });
  };

  return isCustom ? (
    getCustomChildren(children, { onClick: open, ...rest })
  ) : (
    <StyledButton className="open-button" onClick={open}>
      {children}
    </StyledButton>
  );
}

export default OpenButton;

const StyledButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;
