const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const Car = require("./Car");
const AttemptCount = require("./AttemptCount");
const getRandomIntInclusive = require("./getRandomIntInclusive");
const findWinners = require("./findWinners");

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
    const attemptCount = new AttemptCount(answer);
    race(cars, attemptCount);
    const winners = findWinners(cars);
    console.log(`최종 우승자: ${winners.map((it) => it.name)}`);
    rl.close();
  });
}

function race(cars, attemptCount) {
  console.log("실행 결과");
  for (let index = 0; index < attemptCount.value; index++) {
    const condition = () => getRandomIntInclusive(0, 9);
    cars.forEach((it) => {
      it.move(condition);
      console.log(renderCar(it));
    });
    console.log();
  }
}

function renderCar(car) {
  return `${car.name} : ${"-".repeat(car.position)}`;
}
