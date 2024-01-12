const getRandomIntInclusive = require("./utils/getRandomIntInclusive");

const MINIMUM_MOVEMENT_CONDITION = 4;

const randomMovementStrategy = () =>
  getRandomIntInclusive(0, 9) >= MINIMUM_MOVEMENT_CONDITION;

module.exports = randomMovementStrategy;
