import { create } from "zustand";

interface TempState {
  temp: "c" | "f";
  setTemp: (newTemp: "c" | "f") => void;
}

export const useTempData = create<TempState>((set) => ({
  temp: "c",
  setTemp: (newTemp: "c" | "f") => set({ temp: newTemp }),
}));
