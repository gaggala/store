export default function store<state, action>(initialValue: state, reducer: (previousState: state, action: action) => state) {
  let state = initialValue;

  return {
    getState: () => {
      return state;
    },
    dispatch: (action: action) => {
      state = reducer(state, action)
    },
  }
};
