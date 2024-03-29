import { createPortal } from 'react-dom';
import { styled } from 'styled-components';

import Content from './Content';
import Overlay from './Overlay';
import Wrapper from './Wrapper';

import { useModalStore } from '../hooks/modal';
import Flex from '../../layout/Flex';
import CloseButton from './CloseButton';

import ExitIcon from '../../../assets/Icon/exit.svg';

interface ModalProps {
  portalElementId: string;
  isBottom?: boolean;
  blockScrollOnMount?: boolean;
}

function Modal({
  portalElementId,
  isBottom = false,
  blockScrollOnMount = false,
}: ModalProps) {
  const { isOpen, content, title } = useModalStore((state) => ({
    title: state.title,
    content: state.content,
    isOpen: state.isOpen,
  }));

  return (
    <div>
      {createPortal(
        <>
          {isOpen && (
            <Wrapper
              isBottom={isBottom}
              blockScrollOnMount={blockScrollOnMount}
            >
              <Overlay />
              <Content>
                <Flex justify="space-between" align="center">
                  <StyledModalTitle>{title}</StyledModalTitle>
                  <CloseButton>
                    <ExitIcon />
                  </CloseButton>
                </Flex>
                <div>{content}</div>
              </Content>
            </Wrapper>
          )}
        </>,
        document.getElementById(portalElementId) as Element
      )}
    </div>
  );
}

export default Modal;

const StyledModalTitle = styled.span`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
`;
