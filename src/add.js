const add = (input) => {
  let inputArray = "";
  let result;
  try {
    if (input.length == 0) {
      throw Error("Please provide Numbers to Calculate");
    }

    inputArray = input.split(",");

    if (inputArray.length > 2 || inputArray.length < 2) {
      throw Error("Please provide Two numbers to calculate");
    }

    inputArray = inputArray.map((i) => parseInt(i));
    result = inputArray.reduce((a, b) => a + b, 0);
    return result;
  } catch (e) {
    console.log("There was An error " + e);
    return false;
  }
};

module.exports = add;
