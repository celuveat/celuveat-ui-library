import { createPortal } from 'react-dom';

import Content from './Content';
import Overlay from './Overlay';
import Wrapper from './Wrapper';

import { useModalStore } from '../hooks/modal';

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
  const { isOpen, content } = useModalStore((state) => ({
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
