// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]



function matrix(n) {
    const ans = Array.from({ length: n }, () => Array(n).fill(0));

    let left = 0, right = n - 1;
    let top = 0, bottom = n - 1;
    let num = 1;

    while (num <= n * n) {
        
        for (let i = left; i <= right; i++) {
            ans[top][i] = num++;
        }
        top++;

        
        for (let i = top; i <= bottom; i++) {
            ans[i][right] = num++;
        }
        right--;

        
        for (let i = right; i >= left; i--) {
            ans[bottom][i] = num++;
        }
        bottom--;

        
        for (let i = bottom; i >= top; i--) {
            ans[i][left] = num++;
        }
        left++;
    }

    return ans;
}
module.exports = matrix;
