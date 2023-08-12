import { create } from "zustand";

interface ModalState {
  modalVisible: boolean;
  toggleModal: () => void;
}

export const useShowModal = create<ModalState>((set) => ({
  modalVisible: false,
  toggleModal: () => set((state) => ({ modalVisible: !state.modalVisible })),
}));
