
// You should implement your task here.
const isEven = (num) => num % 2 === 0;

module.exports = function towelSort (matrix) {
  if (!matrix) return [];

  return matrix.reduce( (acc, el, index) => {
    let temp = !isEven(index) ? el.reverse() : el
    acc.push(...temp);
    return acc;
  }, []);
}
