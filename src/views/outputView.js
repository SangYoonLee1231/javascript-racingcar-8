import { MissionUtils } from "@woowacourse/mission-utils";

const outputView = {
  // "실행 결과" 문구 출력
  printExecutionResultTitle() {
    MissionUtils.Console.print("\n실행 결과");
  },

  // 한 라운드의 상태 출력
  printRoundStatusLines(statusLines) {
    statusLines.forEach((line) => {
      MissionUtils.Console.print(line);
    });

    MissionUtils.Console.print("");
  },

  // 최종 우승자 출력
  printWinners(winnerNames) {
    const line = `최종 우승자 : ${winnerNames.join(", ")}`;
    MissionUtils.Console.print(line);
  },
};

export default outputView;
