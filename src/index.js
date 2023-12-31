const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const Car = require("./Car");

const rl = readline.createInterface({ input, output });

(function askCarNames() {
  rl.question(
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
    (answer) => {
      const cars = createCars(answer);
      console.log(cars.map((it) => it.name));
      rl.close();
    }
  );
})();

function createCars(answer) {
  return answer.split(",").map((it) => new Car(it.trim()));
}
