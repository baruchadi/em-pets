import React, { useContext } from "react";
import { BaseStats } from "../shards/base-stats.data";
import { GameContext } from "../game-store.component";

export const t = "test";

export type BaseActions = {
  feedAction: () => void;
  waterAction: () => void;
  healAction: () => void;
};

export function createBaseActions({
  foodReducer,
  waterReducer,
  healthReducer
}: BaseStats): BaseActions {
  const feedAction = () => {
    foodReducer && foodReducer[1]({ type: "increment" });
  };
  const waterAction = () => {
    waterReducer && waterReducer[1]({ type: "increment" });
  };
  const healAction = () => {
    healthReducer && healthReducer[1]({ type: "increment" });
  };
  return { feedAction, waterAction, healAction };
}

export function useBaseActions() {
  const gameContext = useContext(GameContext);
  const baseActions = gameContext.actions;
  return baseActions;
}

export function useFeedAction() {
  return useBaseActions().feedAction;
}
export function useWaterAction() {
  return useBaseActions().waterAction;
}
export function useHealAction() {
  return useBaseActions().healAction;
}
