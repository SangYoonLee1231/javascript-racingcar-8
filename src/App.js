import inputView from "./views/inputView";

class App {
  async run() {
    try {
      // 자동차 이름 입력 받기
      const rawInput = await inputView.readCarNames();

      // 자동차 이름 파싱
      const carNamesArray = parseCarNames(rawInput);
    } catch (error) {
      throw new Error("[ERROR] " + error.message);
    }
  }
}

export default App;
