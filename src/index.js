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
      askAttemptCount();
    }
  );
})();

function createCars(answer) {
  return answer.split(",").map((it) => new Car(it.trim()));
}

function askAttemptCount() {
  rl.question("시도할 횟수는 몇 회인가요?\n", (answer) => {
    const attemptCount = createAttemptCount(answer);
    console.log(attemptCount);
    rl.close();
  });
}

function createAttemptCount(answer) {
  const attemptCount = parseInt(answer);
  if (!attemptCount || attemptCount < 0) {
    throw new Error("시도 횟수는 0보다 큰 숫자여야 합니다.");
  }
  return attemptCount;
}
