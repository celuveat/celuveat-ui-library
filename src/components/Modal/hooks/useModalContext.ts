import { createContext } from 'react';

export interface ModalContextState {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextState>(
  {} as ModalContextState
);
