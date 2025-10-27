export function getWinners(cars) {
  // 최대 position 찾기
  const maxPosition = Math.max(...cars.map((car) => car.position));

  // 그 position을 가진 자동차들의 이름만 뽑기
  const winners = cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name);

  return winners;
}
