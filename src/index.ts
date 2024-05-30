

function formingMagicSquare(s: number[][]): number {
  // Write your code here
  let result = 0;
  let rows = [];
  let cols = [];
  let diag = [0, 0];
  for (let i = 0; i < s.length; i += 1) {
    // Row
    const row = s[i];
    const sumRow = row.reduce((acc, curr) => acc + curr, 0);
    rows.push(sumRow);
    // Column
    let col = [];
    for (let j = 0; j < s.length; j += 1) {
      col.push(s[j][i]);
    }
    const sumCol = col.reduce((acc, curr) => acc + curr, 0);
    cols.push(sumCol);
    // Diag
    const diagA = s[i][i];
    diag[1] = diag[1] + diagA;
    const diagB = s[i][s.length - i - 1];
    diag[0] = diag[0] + diagB;
  }
  console.log("rows", rows, "cols", cols, "diags", diag);
  // Find the major diff
  let rowResult = { index: 0, value: 0 };
  let rowMax = Math.max(...rows)
  let rowMin = Math.min(...rows)
  let rowDiff = Math.abs(rowMax - rowMin)
  let colResult = { index: 0, value: 0 };
  let colMax = Math.max(...cols)
  let colMin = Math.min(...cols)
  let colDiff = Math.abs(colMax - colMin)
  let diagDiff = Math.abs(diag.reduce((acc, curr) => curr - acc, 0))

  console.log(rowDiff, colDiff, diagDiff)

  return result;
}

const s = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];

console.log(formingMagicSquare(s));
