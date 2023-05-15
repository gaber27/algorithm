class Job {
    constructor(id, deadline, profit) {
      this.id = id;
      this.deadline = deadline;
      this.profit = profit;
    }
  }
  
  function maxProfit(jobs) {
    // sort jobs in descending order of profit
    jobs.sort((a, b) => b.profit - a.profit);
  
    let n = jobs.length;
    let maxDeadline = Math.max(...jobs.map(j => j.deadline));
    let slot = new Array(maxDeadline).fill(false);
  
    let count = 0, profit = 0;
    for (let i = 0; i < n; i++) {
      let j = jobs[i].deadline - 1;
      while (j >= 0 && slot[j]) j--; // find first available slot
      if (j >= 0) {
        slot[j] = true; // mark slot as occupied
        count++;
        profit += jobs[i].profit;
      }
    }
  
    return { count, profit };
  }
  
  let jobs = [new Job(1, 4, 20), new Job(2, 1, 10), new Job(3, 1, 40), new Job(4, 1, 30)];
  let { count, profit } = maxProfit(jobs);
  console.log(`Number of jobs done: ${count}`);
  console.log(`Maximum profit: ${profit}`);
  