const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const result = [];
  for (let row = 0; row < rows; row += 1) {
    const res = [];
    for (let column = 0; column < columns; column += 1) {
      let count = 0;
      for (let row1 = -1; row1 <= 1; row1 += 1) {
        for (let column1 = -1; column1 <= 1; column1 += 1) {
          const newRow = row + row1;
          const newColumn = column + column1;

          if (newRow >= 0 && newRow < rows && newColumn >= 0 && newColumn < columns && !(row1 === 0 && column1 === 0) &&  matrix[newRow][newColumn]) {
            count++;
          }
        }
      }
      res.push(count);
    }
    result.push(res);
  }
  return result;
}

module.exports = {
  minesweeper
};
