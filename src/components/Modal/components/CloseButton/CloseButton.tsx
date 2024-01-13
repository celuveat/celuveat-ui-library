import { styled } from 'styled-components';
import { ComponentPropsWithoutRef } from 'react';
import { getCustomChildren } from '../../../../utils/getCustomChildren';
import { useModalStore } from '../../hooks/modal';

interface CloseButtonProps extends ComponentPropsWithoutRef<'button'> {
  isCustom?: boolean;
}

function CloseButton({ isCustom, children, ...rest }: CloseButtonProps) {
  const { closeModal } = useModalStore((state) => ({
    closeModal: state.closeModal,
  }));

  return isCustom ? (
    getCustomChildren(children, { onClick: closeModal, ...rest })
  ) : (
    <StyledButton className="close-button" onClick={closeModal}>
      {children}
    </StyledButton>
  );
}

export default CloseButton;

const StyledButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;
