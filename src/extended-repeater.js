const CustomError = require("../extensions/custom-error");

/*
* Your task is to implement the function repeater(str, options). This function returns a repeating string based on the
*  given parameters:
str is a string to repeat;
options is an object of options, that contains properties:
repeatTimes sets the number of repetitions of the str;
separator is a string separating repetitions of the str;
addition is an additional string that will be added to each repetition of the str;
additionRepeatTimes sets the number of repetitions of the addition;
additionSeparator is a string separating repetitions of the addition.
The str and addition parameters are strings by default. In case when type of these parameters is different, they must
* be converted to a string.
separator and additionSeparator parameters are strings.
repeatTimes and additionRepeatTimes are integer numbers (in the absence of any of them, the corresponding string is not
* repeated).
The only indispensable parameter is str, any others may be not defined. separator default value is '+'. additionSeparator
* default value is '|'.
For example: repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3,
* additionSeparator: '00' }) => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
* */

module.exports = function repeater( str, options ) {
  const strString = `${str}`;

  if (options === undefined){
    return strString;
  }

  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;

  if (repeatTimes === undefined || !Number.isInteger(repeatTimes)){
    repeatTimes = 1;
  }

  if (separator === undefined){
    separator = "+";
  }

  if (addition === undefined){
    addition = "";
  } else {
    addition = `${addition}`;
  }

  if (additionRepeatTimes === undefined || !Number.isInteger(additionRepeatTimes)){
    additionRepeatTimes = 1;
  }

  if (additionSeparator === undefined){
    additionSeparator = "|";
  }

  const repeat = function (str, count, separator) {
    return str + (separator + str).repeat(count-1);
  }

  return repeat(strString +
    repeat(addition, additionRepeatTimes, additionSeparator),
      repeatTimes,
      separator );
};
  