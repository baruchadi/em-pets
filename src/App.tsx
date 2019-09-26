import React, { useState, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BarComponent } from "./Components/atoms/bar.component";
import { ButtonComponent } from "./Components/atoms/button.component";
import { ScreenComponent } from "./Components/atoms/screen.component";

const initialState = { count: 0 };

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { count: (state.count + 5)%100 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const App: React.FC = () => {
  // const [filled,setFilled] = useState(10);
  const [food, dispatchFood] = useReducer(reducer,initialState);
  const [water, dispatchWater] = useReducer(reducer,initialState);
  const [health, dispatchHealth] = useReducer(reducer,initialState);
  return (
    <div className="App">
      <div
        style={{ width: "400px", height: "400px" }}
      >
        <ScreenComponent >
          <div className="w-100 h-75 flex flex-row items-end justify-end" >
          <BarComponent filled={food.count} />
          <BarComponent filled={water.count} />
          <BarComponent filled={health.count} />
          </div>
          <div className="flex flex-row justify-center">
          <ButtonComponent text="feed" onClick={()=>dispatchFood({type:"increment"})} />
          <ButtonComponent text="water" onClick={()=>dispatchWater({type:"increment"})} />
          <ButtonComponent text="heal" onClick={()=>dispatchHealth({type:"increment"})} />
          </div>
        </ScreenComponent>
      </div>
    </div>
  );
};

export default App;
