function isString(input) {
  return (
    typeof input === "string" &&
    input.trim() !== "" &&
    /^[a-zA-Z\s]+$/.test(input)
  );
}

function isNumberAndPositive(input) {
  return !isNaN(input) && Number(input) >= 0 && Number(input) <= 10;
}

function isInteger(input) {
  const number = Number(input);
  return Number.isInteger(number) && number >= 0 && number <= 10;
}

module.exports = {
  isString,
  isNumberAndPositive,
  isInteger,
};
