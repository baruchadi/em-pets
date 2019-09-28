import React from "react";
import { useGetBaseStats } from "./data/getters/base-stats.getter";

const strings = {
  food: [
    "I'm Starving :'(",
    "I'm hungry",
    "I could use a snack",
    "I'm stuffed",
    "I can't eat anymore >.<"
  ],
  health: [
    "I dying x.x",
    "I feel bad :(",
    "I don't feel too well",
    "I feel good :)",
    "Never felt better!"
  ],
  water: [
    "I'm parched!",
    "I'm thirsty",
    "can I have some water?",
    "I drank so much",
    "Too... much... water >.<"
  ]
};

function hundredToIndex(num: number): number {
  return Math.floor(num / 10 / 2);
}

export function EmPet() {
  const baseStats = useGetBaseStats("water", "health", "food");
  if (!baseStats) {
    return <div>"loading..."</div>;
  }
  const [food] = baseStats.foodReducer!;
  const [health] = baseStats.healthReducer!;
  const [water] = baseStats.waterReducer!;
  console.log(
    strings.food[Math.round(food.val / 10)],
    Math.round(food.val / 10 / 2)
  );
  return (
    <div>
      <p>{strings.health[hundredToIndex(health.val)]}</p>
      <p>{strings.food[hundredToIndex(food.val)]}</p>
      <p>{strings.water[hundredToIndex(water.val)]}</p>
    </div>
  );
}
