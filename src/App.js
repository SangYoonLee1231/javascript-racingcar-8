import inputView from "./views/inputView.js";
import outputView from "./views/outputView.js";

import { parseCarNames } from "./utils/inputParser.js";
import { validateCarNames } from "./utils/validator.js";
import { validateTryCount } from "./utils/validator.js";
import { createCars } from "./domain/createCars.js";
import { runRace } from "./game/runRace.js";

class App {
  async run() {
    try {
      // 1-1. 자동차 이름 입력 받기
      const rawInput = await inputView.readCarNames();

      // 1-2. 자동차 이름 파싱
      const carNamesArray = parseCarNames(rawInput);

      // 1-3. 자동차 이름 유효성 검사
      validateCarNames(carNamesArray);

      // 2-1. 시도 횟수 입력 받기
      const tryCountStr = await inputView.readTryCount();

      // 2-2. 시도 횟수 파싱 및 유효성 검사
      const tryCount = validateTryCount(tryCountStr);

      // 3. 자동차 객체들 준비
      const cars = createCars(carNamesArray);

      // 4-1. 레이스 진행 (N번 라운드 반복)
      const { roundLogs, winners } = runRace(cars, tryCount);

      // 4-2. 출력 시작, 실행 결과 안내
      outputView.printExecutionResultTitle();

      // 4-3. 각 라운드 결과 출력
      roundLogs.forEach((statusLines) => {
        outputView.printRoundStatusLines(statusLines);
      });

      // 5. 우승자 출력
      outputView.printWinners(winners);
    } catch (error) {
      throw new Error("[ERROR] " + error.message);
    }
  }
}

export default App;
