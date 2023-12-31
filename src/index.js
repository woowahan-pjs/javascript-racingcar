const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const Car = require("./Car");
const AttemptCount = require("./AttemptCount");

const rl = readline.createInterface({ input, output });

(function askCarNames() {
  rl.question(
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
    (answer) => {
      const cars = createCars(answer);
      console.log(cars.map((it) => it.name));
      askAttemptCount();
    }
  );
})();

function createCars(answer) {
  return answer.split(",").map((it) => new Car(it.trim()));
}

function askAttemptCount() {
  rl.question("시도할 횟수는 몇 회인가요?\n", (answer) => {
    const attemptCount = new AttemptCount(answer);
    console.log(attemptCount.value);
    rl.close();
  });
}
