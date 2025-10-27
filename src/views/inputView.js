import { MissionUtils } from "@woowacourse/mission-utils";

const inputView = {
  async readCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );

    if (!inputStr || inputStr !== "string") {
      throw new Error("입력값이 올바르지 않습니다.");
    }

    return input;
  },
};

export default inputView;
