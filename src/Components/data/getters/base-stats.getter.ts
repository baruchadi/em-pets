import { useContext } from "react";
import { GameContext } from "../game-store.component";
import { BaseStats, BaseStatsType } from "../shards/base-stats.data";

export function useGetBaseStats(...keys: BaseStatsType[]): BaseStats | null {
  const { baseStats } = useContext(GameContext) as {
    baseStats: { [stat: string]: any };
  };
  const obj: { [stat: string]: any } = {};
  keys.forEach(key => {
    if (!key.endsWith("Reducer")) {
      key += "Reducer";
    }
    if (baseStats[key]) {
      obj[key] = baseStats[key];
    } else {
      return null;
    }
  });
  return obj as BaseStats;
}
