import React, { useReducer, Dispatch, ReducerAction } from "react";

type gameData = {
  baseStats: BaseStats;
};

export type BaseStats = {
  foodReducer?: incDecReducerType;
  waterReducer?: incDecReducerType;
  healthReducer?: incDecReducerType;
};

type incDecReducerType = [
  typeof initialState,
  Dispatch<ReducerAction<typeof incDecReducer>>
];

type incDecReducerAction = {
  type: "increment" | "decrement";
};

const baseData = {
  baseStats: {}
};

export const GameContext = React.createContext<gameData>(baseData);
const initialState = { val: 50 };

enum REDUCER_NAMES {
  incDec
}

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

export function GameDataWrapper({ children }: { children: React.ReactNode }) {
  //   const _incDecReducer = [incDecReducer, initialState];
  const foodReducer = useReducer(incDecReducer, initialState);
  const waterReducer = useReducer(incDecReducer, initialState);
  const healthReducer = useReducer(incDecReducer, initialState);
  return (
    <GameContext.Provider
      value={{
        baseStats: {
          foodReducer,
          waterReducer,
          healthReducer
        }
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
