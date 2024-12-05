function isRightAngledTriangle(sideA, sideB, sideC) {
  const sideASquared = require("./mathFunctions").squareNumber(sideA);
  const sideBSquared = require("./mathFunctions").squareNumber(sideB);
  const sideCSquared = require("./mathFunctions").squareNumber(sideC);

  return sideCSquared === sideASquared + sideBSquared;
}

module.exports = isRightAngledTriangle;
