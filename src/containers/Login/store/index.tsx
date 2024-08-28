import { create } from "zustand";

type State = {
  loading: boolean;
};

type Action = {
  updateLoading: (loading: State['loading']) => void,
  reset: () => void

};

const initialState: State = {
  loading: false,
}

// Create your store, which includes both state and (optionally) actions
const loginStore = create<State & Action>((set) => ({
  ...initialState,
  updateLoading: (loading) => set(() => ({ loading: loading })),
  reset: () => {
    set(initialState)
  },
}));

export default loginStore;