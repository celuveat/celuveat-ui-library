import { create } from 'zustand';

type OpenModalType = {
  content: JSX.Element | string;
};

interface ModalState {
  isOpen: boolean;
  content: JSX.Element | string;
  openModal: ({ content }: OpenModalType) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  content: '',
  openModal: ({ content }) =>
    set(() => {
      return { isOpen: true, content };
    }),
  closeModal: () =>
    set((state) => {
      return { ...state, isOpen: false };
    }),
}));
