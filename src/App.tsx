import React, { useContext } from "react";

import "./App.css";
import { BarComponent } from "./Components/atoms/bar.component";
import { ButtonComponent } from "./Components/atoms/button.component";
import { ScreenComponent } from "./Components/atoms/screen.component";
import {
  GameDataWrapper,
  GameContext
} from "./Components/data/game-store.component";
import { Circle } from "./Components/atoms/circle.component";
import { useGetBaseStats } from "./Components/data/getters/base-stats.getter";
import { EmPet } from "./Components/em-pet.component";
import {
  useHealAction,
  useWaterAction,
  useFeedAction,
  useBaseActions
} from "./Components/data/actions/base.actions";

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

function Game() {
  const baseStats = useGetBaseStats("water", "health", "food");
  const { feedAction, waterAction, healAction } = useBaseActions();

  if (!baseStats) {
    return <div>"Loading..."</div>;
  }
  const [food] = baseStats.foodReducer!;
  const [health] = baseStats.healthReducer!;
  const [water] = baseStats.waterReducer!;

  return (
    <>
      <EmPet />
      <Circle />
      <div className="w-100 h-75 flex flex-row items-end justify-end">
        <BarComponent filled={food.val} />
        <BarComponent filled={water.val} />
        <BarComponent filled={health.val} />
      </div>
      <div className="flex flex-row justify-center">
        <ButtonComponent text="feed" onClick={feedAction} />
        <ButtonComponent text="water" onClick={waterAction} />
        <ButtonComponent text="heal" onClick={healAction} />
      </div>
    </>
  );
}

export default App;
