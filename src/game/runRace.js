import { playOneRound } from "./raceRound.js";
import { getWinners } from "./winner.js";

export function runRace(cars, tryCount) {
  const roundLogs = [];

  for (let i = 0; i < tryCount; i += 1) {
    const statusLines = playOneRound(cars);
    roundLogs.push(statusLines);
  }

  const winners = getWinners(cars);

  return {
    roundLogs,
    winners,
  };
}
