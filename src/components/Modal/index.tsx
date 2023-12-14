import Root from './components/Modal';
import Closer from './components/Closer/Closer';
import Content from './components/Content/Content';
import Overlay from './components/Overlay/Overlay';
import Trigger from './components/Trigger/Trigger';

const Modal = Object.assign(Root, {
  Trigger,
  Overlay,
  Content,
  Closer,
});

export default Modal;
