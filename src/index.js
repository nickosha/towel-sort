
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {return []}
  const newArr = matrix.reduce((acc, curVal, index) => {
    console.log(index%2)
    if (index%2) {
      acc = [...acc, ...curVal.reverse()]
    } else {
      acc = [...acc, ...curVal]
    }
    return acc
  }, [])
  return newArr;
}
