const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let acc = 0;
  matrix.flat().forEach((val) => {if (val === "^^") ++acc;});
  return acc;
};
