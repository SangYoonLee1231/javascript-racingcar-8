export function validateCarNames(carNamesArray) {
  const MAX_NAME_LENGTH = 5;

  carNamesArray.forEach((name) => {
    if (name.length === 0) {
      throw new Error("자동차 이름은 빈 문자열일 수 없습니다.");
    }
    if (name.length > MAX_NAME_LENGTH) {
      throw new Error(
        `자동차 이름은 ${MAX_NAME_LENGTH}자를 초과할 수 없습니다.`
      );
    }
  });
}

export function validateTryCount(tryCountStr) {
  if (typeof tryCountStr !== "string") {
    throw new Error("시도 횟수가 정확히 입력되지 않았습니다.");
  }

  const tryCountNum = Number(tryCountStr);

  if (!Number.isInteger(tryCountNum) || tryCountNum < 1) {
    throw new Error("시도 횟수는 1 이상의 정수여야 합니다.");
  }

  return tryCountNum;
}
