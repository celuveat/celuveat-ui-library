import { useModalStore } from '../../hooks/modal';

import './style.css';

function Overlay() {
  const { closeModal } = useModalStore((state) => ({
    closeModal: state.closeModal,
  }));

  window.addEventListener('keyup', () => {
    closeModal();
  });

  return <div className="overlay" onClick={closeModal} />;
}

export default Overlay;
