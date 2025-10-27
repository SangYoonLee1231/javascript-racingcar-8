export function parseCarNames(rawInput) {
  const carNamesArray = rawInput
    .split(",") // 쉼표(,) 기준으로 문자열 분리
    .map((name) => name.trim()) // 각 이름의 앞뒤 공백 제거
    .filter((name) => name !== ""); // 빈 문자열 제거

  if (carNamesArray.length === 0) {
    throw new Error("자동차 이름이 하나 이상 있어야 합니다.");
  }

  return carNamesArray;
}
