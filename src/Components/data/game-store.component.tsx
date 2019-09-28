import React from "react";
import { BaseStats, useBaseStats } from "./shards/base-stats.data";
import { createBaseActions, BaseActions } from "./actions/base.actions";
type gameData = {
  baseStats: BaseStats;
  actions: BaseActions;
};

const baseData = {
  baseStats: {},
  actions: { feedAction: () => {}, waterAction: () => {}, healAction: () => {} }
};

export const GameContext = React.createContext<gameData>(baseData);

export function GameDataWrapper({ children }: { children: React.ReactNode }) {
  const baseStats = useBaseStats();
  const baseActions = createBaseActions(baseStats);
  return (
    <GameContext.Provider
      value={{
        baseStats,
        actions: baseActions
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
