const CustomError = require("../extensions/custom-error");
/*
* Your task is to implement the class DepthCalculator with method calculateDepth that takes an array and returns its depth.
calculateDepth method must pass the given array recursively. Depth of a flat array is 1. Method must correctly work with
*  arrays that contain no elements or contain empty arrays.
For example:
const depthCalc = new DepthCalculator();
depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
depthCalc.calculateDepth([[[]]]) => 3
* */

module.exports = class DepthCalculator {

  calculateDepth( arr ) {
    let nestedDepthMax = 0;
    let saveThis = this;
    arr.forEach(function (el) {
      if (Array.isArray(el)){
        nestedDepthMax = Math.max(saveThis.calculateDepth(el), nestedDepthMax);
      }
    });
    return nestedDepthMax + 1;
  }
};