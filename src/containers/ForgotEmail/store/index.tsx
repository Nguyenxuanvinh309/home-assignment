import { create } from "zustand";
import { Action, State } from "./type";

const initialState: State = {
  loading: false,
  error: undefined,
  data: undefined
}

// Create your store, which includes both state and (optionally) actions
const loginStore = create<State & Action>((set) => ({
  ...initialState,
  updateLoading: (loading) => set(() => ({ loading: loading })),
  updateError: (error) => set(() => ({ error: error })),
  updateData: (data) => set(() => ({ data: data })),
  reset: () => {
    set(initialState)
  },
}));

export default loginStore;