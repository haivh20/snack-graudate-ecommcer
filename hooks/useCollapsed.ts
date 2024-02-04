import { create } from "zustand";

interface ICollapsed {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const useCollapsed = create<ICollapsed>((set) => ({
  collapsed: false,
  setCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
}));

export default useCollapsed;
