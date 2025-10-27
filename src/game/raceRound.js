import { MissionUtils } from "@woowacourse/mission-utils";

export function playOneRound(cars) {
  cars.forEach((car) => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    car.tryMoveForward(randomNumber);
  });

  return cars.map((car) => car.getStatusLine());
}
