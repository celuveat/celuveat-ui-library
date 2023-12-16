import { ReactNode } from 'react';
import { create } from 'zustand';

export interface ModalState {
  isModalOpen: boolean;
  currentModalContent: ReactNode;

  openModal: ({ content }: { content: ReactNode }) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  currentModalContent: null,

  openModal: ({ content }) =>
    set(() => ({ isModalOpen: true, currentModalContent: content })),
  closeModal: () =>
    set(() => ({ isModalOpen: false, currentModalContent: null })),
}));

export default useModalStore;
