var M = [
    [3, 3, 1, 1],
    [2, 2, 1, 2],
    [1, 1, 1, 2],
  ];
var diagonalSort = function(M) {
    let y = M.length, x = M[0].length - 1,
        diag = new Uint8Array(y), k
    for (let i = 2 - y; i < x; i++) {
        diag.fill(101), k = 0
        for (let j = 0; j < y; j++)
            if (i+j >= 0 && i+j <= x)
                diag[k++] = M[j][i+j]
        diag.sort(), k = 0
        for (let j = 0; j < y; j++)
            if (i+j >= 0 && i+j <= x)
                M[j][i+j] = diag[k++]
    }
    return M
};
console.log(M);