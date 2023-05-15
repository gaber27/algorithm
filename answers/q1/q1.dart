class Job {
  int id, deadline, profit;
  Job(this.id, this.deadline, this.profit);
}

int maxProfit(List<Job> jobs) {
  // sort jobs in descending order of profit
  jobs.sort((a, b) => b.profit.compareTo(a.profit));

  int n = jobs.length;
  int maxDeadline = jobs.map((j) => j.deadline).reduce((a, b) => a > b ? a : b);
  List<bool> slot = List.filled(maxDeadline, false);

  int count = 0, profit = 0;
  for (int i = 0; i < n; i++) {
    int j = jobs[i].deadline - 1;
    while (j >= 0 && slot[j]) j--; // find first available slot
    if (j >= 0) {
      slot[j] = true; // mark slot as occupied
      count++;
      profit += jobs[i].profit;
    }
  }

  return profit;
}

void main() {
  List<Job> jobs = [Job(1, 4, 20), Job(2, 1, 10), Job(3, 1, 40), Job(4, 1, 30)];
  int count = maxProfit(jobs);
  print("Number of jobs done: $count");
  int profit = maxProfit(jobs);
  print("Maximum profit: $profit");
}
