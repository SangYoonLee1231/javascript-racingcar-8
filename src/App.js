import inputView from "./views/inputView";
import { parseCarNames } from "./utils/parser.js";
import { validateCarNames } from "./utils/validator.js";

class App {
  async run() {
    try {
      // 1. 자동차 이름 입력 받기
      const rawInput = await inputView.readCarNames();

      // 2. 자동차 이름 파싱
      const carNamesArray = parseCarNames(rawInput);

      // 3. 자동차 이름 유효성 검사
      validateCarNames(carNamesArray);
    } catch (error) {
      throw new Error("[ERROR] " + error.message);
    }
  }
}

export default App;
