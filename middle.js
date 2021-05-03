const middle = function(arr) {
  const midIndex = (arr.length / 2);
  const midArray = [];
  if (midIndex % 1 === 0) {
    midArray.push(arr[midIndex - 1], arr[midIndex]);
  } else midArray.push((arr[Math.floor(midIndex)]));
  return midArray;
};

module.exports = middle;

