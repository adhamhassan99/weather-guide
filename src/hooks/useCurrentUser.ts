import { create } from "zustand";
interface currentUserState {
  userData: any;
  setUserData: (userData: any) => void;
}
export const useCurrentUser = create<currentUserState>((set) => ({
  userData: {},
  setUserData: (userData: any) => set({ userData: userData }),
}));
