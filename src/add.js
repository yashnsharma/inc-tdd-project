let delimiter;
let _input;

const add = (input) => {
  let inputArray = [];
  let result;
  _input = input;

  try {
    // check for empty parameters
    if (input.length == 0) {
      throw Error("Please provide two Numbers to Calculate");
    }

    delimiter = getDelimiter(input);

    // remove newline in input
    _input = _input.replace(/\n/, delimiter).trim();

    inputArray = parseInput(_input);

    // check for parameter length limits
    if (inputArray.length > 2 || inputArray.length < 2) {
      throw Error("Provided numbers exceed the required limits");
    }
    // Calculate Sum of all numbers
    result = inputArray.reduce((a, b) => a + b, 0);
    return result;
  } catch (e) {
    console.error("There was An error " + e);
    return false;
  }
};

const getDelimiter = (input) => {
  let _delimiter;

  if (input.indexOf("//") != -1) {
    // update delimiter
    _delimiter = input[2];

    // remove delimiter flag
    _input = _input.replace("//", "");
  } else {
    _delimiter = ",";
  }

  return _delimiter;
};

const parseInput = (input) => {
  let negatives = [];
  // split input with passed elimiter

  let result = input
    .split(delimiter)
    .map((i) => parseInt(i))
    .filter((i) => {
      // handle negative numbers
      if (i < 0) negatives.push(i);
      // filter non-zero numbers
      return i > 0;
    });

  if (negatives.length > 0)
    throw Error("negatives not allowed : " + JSON.stringify(negatives));

  return result;
};

module.exports = add;
