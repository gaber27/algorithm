function maxProfit(jobs) {
    const len = jobs.length;
    jobs.sort((a, b) => a[1] - b[1]);
    const table = new Array(len + 1).fill(0);
    for (let j = 1; j <= len; j++) {
        let i = j - 1;
        while (i >= 0 && jobs[i][1] > jobs[j - 1][0]) {
          i--;
        }
        table[j] = jobs[j - 1][2] + (i >= 0 ? table[i + 1] : 0);
        table[j] = Math.max(table[j], table[j - 1]);
      }
    
      return table[len];
}
const jobs = [
  [1, 6, 6],
  [2, 5, 5],
  [5, 7, 5],
  [6, 8, 3],
];
console.log(maxProfit(jobs));
