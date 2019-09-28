import { Dispatch, ReducerAction, useReducer } from "react";

export type incDecReducerType = [
  typeof initialState,
  Dispatch<ReducerAction<typeof incDecReducer>>
];

type incDecReducerAction = {
  type: "increment" | "decrement";
};

const initialState = { val: 50 };

function incDecReducer(
  state: typeof initialState,
  action: incDecReducerAction
): typeof initialState {
  switch (action.type) {
    case "increment":
      return { val: (state.val + 5) % 100 };
    case "decrement":
      return { val: state.val - 1 };
    default:
      throw new Error();
  }
}

export function useIncDecReducer() {
  return useReducer(incDecReducer, initialState);
}
