export type State = {
  loading: boolean;
  error?: {
    code: number,
    message: string,
  };
  data: {
    code: 200,
    params: {
      email: string
    }
  } | undefined
};

export type Action = {
  updateLoading: (loading: State['loading']) => void,
  updateError: (error: State['error']) => void,
  updateData: (error: State['data']) => void,
  reset: () => void
};