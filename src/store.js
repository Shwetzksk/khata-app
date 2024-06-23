import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      data: [],
      add: (data) =>
        set(() => {
          const state = get().data;
          const { name, items } = data;
          const totalAmount = items.reduce((acc, cur) => acc + +cur.amount, 0);
          const newData = {
            count: items.length,
            total: totalAmount,
            index: state.length,
            items,
            name,
          };
          return { data: [...state, newData] };
        }),
      update: (editData) =>
        set(() => {
          const state = get().data;
          const index = editData.index;
          const arr = [...state];
          arr[index] = editData;
          return { data: arr };
        }),
      delete: (index) =>
        set(() => ({ data: get().data.filter((_, i) => index !== i) })),
    }),
    {
      name: "data",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
