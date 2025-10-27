import { MissionUtils } from "@woowacourse/mission-utils";

const inputView = {
  // 자동차 이름 입력 받기
  async readCarNames() {
    const inputStr = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    if (!inputStr || inputStr !== "string") {
      throw new Error("입력값이 올바르지 않습니다.");
    }

    return inputStr;
  },

  // 시도 횟수 입력 받기
  async readTryCount() {
    const tryCountStr = await MissionUtils.Console.readLineAsync(
      "시도할 회수는 몇 회인가요?\n"
    );

    return tryCountStr;
  },
};

export default inputView;
