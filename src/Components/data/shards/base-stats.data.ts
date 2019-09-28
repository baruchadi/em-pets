import {
  incDecReducerType,
  useIncDecReducer
} from "../reducers/inc-dec.reducer";

export type BaseStatsType = "water" | "food" | "health";

export type BaseStats = {
  foodReducer?: incDecReducerType;
  waterReducer?: incDecReducerType;
  healthReducer?: incDecReducerType;
};

export function useBaseStats() {
  const foodReducer = useIncDecReducer();
  const waterReducer = useIncDecReducer();
  const healthReducer = useIncDecReducer();
  return { foodReducer, waterReducer, healthReducer };
}
