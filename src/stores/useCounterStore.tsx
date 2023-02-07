import React from "react";
import { create } from "zustand";

interface CounterStore {
  counter: number;
  add: () => void;
}

const useCounterStore = create<CounterStore>()((set) => ({
  counter: 0,
  add: () => set((state) => ({ counter: state.counter + 1 })),
}));

export default useCounterStore;
