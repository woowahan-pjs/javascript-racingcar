const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

(function askCarNames() {
  rl.question(
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
    (answer) => {
      const cars = answer.split(",");
      console.log(cars);
      rl.close();
    }
  );
})();
