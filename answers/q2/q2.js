function maxProfit(jobs) {
    const len = jobs.length;
    jobs.sort((a, b) => a[1] - b[1]);
    const table = new Array(len + 1).fill(0);
    for (let j = 1; j <= N; j++) {
        let i = j - 1;
        while (i >= 0 && jobs[i][1] > jobs[j - 1][0]) {
          i--;
        }
        dp[j] = jobs[j - 1][2] + (i >= 0 ? dp[i + 1] : 0);
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
    
      return dp[N];
}