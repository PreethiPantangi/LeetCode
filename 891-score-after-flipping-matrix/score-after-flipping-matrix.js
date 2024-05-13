/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  for(let i = 0; i < rows; i++) {
      let row = grid[i];
      let val = row[0];
      if(val === 0) {
          grid[i] = row.map((r) => r === 0 ? 1 : 0)
      }
  }
  for(let i = 0; i < cols; i++) {
    let j = 0;
    let count = {'0': 0, '1': 0}
    while (j < rows) {
      count[grid[j][i]] += 1;
      j += 1;
    }
    if(count['0'] > count['1']) {
      let j = 0;
      while (j < rows) {
        grid[j][i] = grid[j][i] === 0 ? 1 : 0;
        j += 1;
      }
    }
  }
  let result = 0;
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
        result += grid[i][j] << (cols - j - 1);
    }
  }
  return result;
};
