import inputView from "./views/inputView";
import { parseCarNames } from "./utils/parser.js";
import { validateCarNames } from "./utils/validator.js";
import { validateTryCount } from "./utils/validator.js";

class App {
  async run() {
    try {
      // 1. 자동차 이름 입력 받기
      const rawInput = await inputView.readCarNames();

      // 2. 자동차 이름 파싱
      const carNamesArray = parseCarNames(rawInput);

      // 3. 자동차 이름 유효성 검사
      validateCarNames(carNamesArray);

      // 4-1. 시도 횟수 입력 받기
      const tryCountStr = await inputView.readTryCount();

      // 4-2. 시도 횟수 파싱 및 유효성 검사
      const tryCount = validateTryCount(tryCountStr);

      // 이후 계속 진행...
    } catch (error) {
      throw new Error("[ERROR] " + error.message);
    }
  }
}

export default App;
