import { ComponentPropsWithoutRef } from 'react';
import { styled } from 'styled-components';
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
