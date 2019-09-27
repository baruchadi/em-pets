import React, { useState, useReducer, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BarComponent } from "./Components/atoms/bar.component";
import { ButtonComponent } from "./Components/atoms/button.component";
import { ScreenComponent } from "./Components/atoms/screen.component";
import {
  GameDataWrapper,
  GameContext,
  BaseStats
} from "./Components/game-store.component";

const App: React.FC = () => {
  return (
    <div className="App">
      <div style={{ width: "400px", height: "400px" }}>
        <ScreenComponent>
          <GameDataWrapper>
            <Game />
          </GameDataWrapper>
        </ScreenComponent>
      </div>
    </div>
  );
};

function useGetBaseStats(...keys: string[]): BaseStats | null {
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

function Game() {
  const baseStats = useGetBaseStats("water", "health", "food");
  if (!baseStats) {
    return <div>"Loading..."</div>;
  }
  const [food, dispatchFood] = baseStats.foodReducer!;
  const [health, dispatchHealth] = baseStats.healthReducer!;
  const [water, dispatchWater] = baseStats.waterReducer!;
  return (
    <div>
      <Circle />
      <div className="w-100 h-75 flex flex-row items-end justify-end">
        <BarComponent filled={food.val} />
        <BarComponent filled={water.val} />
        <BarComponent filled={health.val} />
      </div>
      <div className="flex flex-row justify-center">
        <ButtonComponent
          text="feed"
          onClick={() => dispatchFood({ type: "increment" })}
        />
        <ButtonComponent
          text="water"
          onClick={() => dispatchWater({ type: "increment" })}
        />
        <ButtonComponent
          text="heal"
          onClick={() => dispatchHealth({ type: "increment" })}
        />
      </div>
    </div>
  );
}

const Circle = function() {
  return (
    <svg>
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop
            offset="0%"
            style={{ stopColor: "rgb(0,255,0)", stopOpacity: 0.8 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgb(0,0,0)", stopOpacity: 0 }}
          />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" />
    </svg>
  );
};

export default App;
