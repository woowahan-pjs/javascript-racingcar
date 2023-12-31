const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const Car = require("./Car");
const AttemptCount = require("./AttemptCount");
const Racing = require("./Racing");
const getRandomIntInclusive = require("./getRandomIntInclusive");

const rl = readline.createInterface({ input, output });

(function askCarNames() {
  rl.question(
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
    (answer) => {
      const cars = createCars(answer);
      askAttemptCount(cars);
    }
  );
})();

function createCars(answer) {
  return answer.split(",").map((it) => new Car(it.trim()));
}

function askAttemptCount(cars) {
  rl.question("시도할 횟수는 몇 회인가요?\n", (answer) => {
    const racing = new Racing(cars, new AttemptCount(answer));
    const results = racing.race(() => getRandomIntInclusive(0, 9));
    const winners = racing.findWinners();
    printResults(results, racing.findWinners());
    rl.close();
  });
}

function printResults(results, winners) {
  console.log(`\n실행 결과\n${renderResults(results)}`);
  console.log(`최종 우승자: ${winners.map((it) => it.name).join(", ")}`);
}

function renderResults(results) {
  return `${results.map((it) => renderLap(it)).join("\n")}`;
}

function renderLap(lap) {
  return `${lap.map((it) => renderCar(it)).join("\n")}\n`;
}

function renderCar(car) {
  return `${car.name} : ${"-".repeat(car.position)}`;
}
