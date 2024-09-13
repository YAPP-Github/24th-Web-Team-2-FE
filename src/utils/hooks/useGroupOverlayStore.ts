import { createWithEqualityFn } from 'zustand/traditional';

interface groupOverlayStoreProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useGroupOverlayStore = createWithEqualityFn<groupOverlayStoreProps>()(
  set => ({
    open: false,
    setOpen: (open: boolean) => set({ open }),
  }),
  Object.is,
);
