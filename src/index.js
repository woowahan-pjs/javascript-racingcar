// @ts-check

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const Car = require("./Car");
const AttemptCount = require("./AttemptCount");
const Racing = require("./Racing");
const getRandomIntInclusive = require("./getRandomIntInclusive");

const MINIMUM_MOVEMENT_CONDITION = 4;

const rl = readline.createInterface({ input, output });

// https://mathieularose.com/main-function-in-node-js
if (require.main === module) {
  main();
}

function main() {
  askCarNames();
}

function askCarNames() {
  retryAsking(
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
    (answer) => {
      const cars = createCars(answer);
      askAttemptCount(cars);
    }
  );
}

function createCars(answer) {
  return answer.split(",").map((it) => new Car(it.trim()));
}

function askAttemptCount(cars) {
  retryAsking("시도할 횟수는 몇 회인가요?\n", (answer) => {
    const attemptCount = new AttemptCount(answer);
    const racing = new Racing(cars, attemptCount);
    const results = racing.race(movable());
    const winners = racing.findWinners();
    printResults(results, winners);
    rl.close();
  });
}

/**
 * @param {string} query
 * @param { (answer: string) => void } callback
 */
function retryAsking(query, callback) {
  rl.question(query, (answer) => {
    try {
      callback(answer);
    } catch (e) {
      console.error(`[ERROR] ${e.message}`);
      retryAsking(query, callback);
    }
  });
}

function movable() {
  return () => getRandomIntInclusive(0, 9) >= MINIMUM_MOVEMENT_CONDITION;
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
