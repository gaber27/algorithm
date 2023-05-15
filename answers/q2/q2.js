function maxProfit(jobs) {
    const len = jobs.length;
    jobs.sort((a, b) => a[1] - b[1]);
    const table = new Array(len + 1).fill(0);
}