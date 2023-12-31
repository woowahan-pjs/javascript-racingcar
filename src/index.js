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
    findWinners(cars);
    rl.close();
  });
}

function race(cars, attemptCount) {
  console.log("실행 결과");
  for (let index = 0; index < attemptCount.value; index++) {
    cars.forEach((it) => {
      it.move(getRandomIntInclusive(0, 9));
      console.log(renderCar(it));
    });
    console.log();
  }
}

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

function renderCar(car) {
  return `${car.name} : ${"-".repeat(car.position)}`;
}

function findWinners(cars) {
  const maximumPosition = maxByPosition(cars);
  const winners = filterByPosition(cars, maximumPosition);
  console.log(`최종 우승자: ${winners.map((it) => it.name)}`);
}

function maxByPosition(cars) {
  return Math.max(...cars.map((it) => it.position));
}

function filterByPosition(cars, position) {
  return cars.filter((it) => it.position === position);
}
