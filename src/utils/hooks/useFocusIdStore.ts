import { createWithEqualityFn } from 'zustand/traditional';

interface FodusIdStoreProps {
  focusId: number;
  setFocusId: (id: number) => void;
}

export const useFocusIdStore = createWithEqualityFn<FodusIdStoreProps>()(
  set => ({
    focusId: -1,
    setFocusId: (id: number) => set({ focusId: id }),
  }),
  Object.is,
);
