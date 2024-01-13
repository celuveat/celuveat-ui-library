import { create } from 'zustand';

type OpenModalType = {
  title: string;
  content: JSX.Element | string;
};

interface ModalState {
  title: string;
  isOpen: boolean;
  content: JSX.Element | string;
  openModal: ({ content }: OpenModalType) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  title: '',
  isOpen: false,
  content: '',
  openModal: ({ content, title }) =>
    set(() => {
      return { isOpen: true, content, title };
    }),
  closeModal: () =>
    set((state) => {
      return { ...state, isOpen: false };
    }),
}));
