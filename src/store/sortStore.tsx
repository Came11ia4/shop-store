import { create } from 'zustand';
import { SortItem } from '@/type/global';

interface ISortStore {
  value: SortItem;
  setValue: (value: SortItem) => void
}

export const useSort = create<ISortStore>((set) => ({
  value: 'latest',
  setValue: (value) => set({ value })
}))