import { createPortal } from 'react-dom';

import Content from './Content';
import Overlay from './Overlay';
import Wrapper from './Wrapper';

import { useModalStore } from '../hooks/modal';

interface ModalProps {
  portalElementId: string;
}

function Modal({ portalElementId }: ModalProps) {
  const { isOpen, content } = useModalStore((state) => ({
    content: state.content,
    isOpen: state.isOpen,
  }));

  return (
    <div>
      {createPortal(
        <>
          {isOpen && (
            <Wrapper>
              <Overlay />
              <Content>{content}</Content>
            </Wrapper>
          )}
        </>,
        document.getElementById(portalElementId) as Element
      )}
    </div>
  );
}

export default Modal;
