import { create } from "zustand";

interface InputTextStore {
  text: string;
  setText: (text: string) => void;
}

const useInputTextStore = create<InputTextStore>()((set) => ({
  text: "",
  setText: (text) => set(() => ({ text })),
}));

export default useInputTextStore;
