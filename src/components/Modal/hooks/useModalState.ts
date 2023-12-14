import { useState } from 'react';

const useModalState = (isOpen: boolean) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(isOpen);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, openModal, closeModal };
};

export default useModalState;
