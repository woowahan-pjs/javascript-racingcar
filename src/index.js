// @ts-check

const AttemptCount = require("./AttemptCount");
const Racing = require("./Racing");
const { createCars } = require("./cars");
const randomMovementStrategy = require("./randomMovementStrategy");
const retryAsking = require("./utils/retryAsking");

const CAR_NAME_SEPARATOR = ",";

// https://mathieularose.com/main-function-in-node-js
if (require.main === module) {
  main();
}

function main() {
  askCarNames();
}

function askCarNames() {
  retryAsking(
    `경주할 자동차 이름을 입력하세요(이름은 쉼표(${CAR_NAME_SEPARATOR})를 기준으로 구분).\n`,
    (answer) => {
      const cars = createCars(answer.split(CAR_NAME_SEPARATOR));
      askAttemptCount(cars);
    }
  );
}

function askAttemptCount(cars) {
  retryAsking("시도할 횟수는 몇 회인가요?\n", (answer) => {
    const attemptCount = new AttemptCount(answer);
    const racing = new Racing(cars, attemptCount);
    const results = racing.race(randomMovementStrategy);
    const winners = racing.findWinners();
    printResults(results, winners);
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
