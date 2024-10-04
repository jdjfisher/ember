import { create } from 'zustand';

interface State {
  blurred: boolean;
  blur: () => void;
  unblur: () => void;
}

export const useBlurStore = create<State>((set) => ({
  blurred: false,
  blur: () => set((state) => ({ blurred: true })),
  unblur: () => set((state) => ({ blurred: false })),
}));
