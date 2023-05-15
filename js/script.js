function openTab(evt, tabName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

const ex =
  "The Job Scheduling Problem is a classic problem in computer science and combinatorial optimization, with applications in scheduling, resource allocation, and project management. The objective is to maximize the total profit obtained from completing the jobs within their deadlines. The decision variables are the start times of each job, and the objective function is the total profit obtained from completing the jobs within their deadlines. The problem is NP-hard in general, so efficient heuristic algorithms and approximation algorithms have been developed to find near-optimal solutions in reasonable time.";

document.querySelector("#ex").innerHTML = ex;

const ex2 =
  "The problem at hand is to maximize the profit earned by selecting a subset of jobs from a given list of jobs. Each job in the list has a start time, an end time, and a profit associated with it. The constraint is that no two selected jobs can overlap in time. In other words, if one job is selected and it ends at time X, then any other selected job can only start at or after time X. The goal is to find the optimal set of non-overlapping jobs that yields the maximum profit.";
document.querySelector("#ex2").innerHTML = ex2;

const steps = {
  "step 1": "Sort the jobs in decreasing order of their profit",
  "step 2":
    "Initialize a binary array of size equal to the maximum deadline among all jobs, where each element is initially set to False. This array will be used to keep track of the schedule of jobs.",
  "step 3":
    "For each job in the sorted list, starting from the job with the highest profit, do the following:",
  "step 4":
    "For each job, starting from the job with the highest profit, check if there is a slot available in the binary array from the deadline of the job to the earliest possible time. If there is a slot available, mark that slot as True and add the profit of the job to the maximum profit earned. Increment the number of jobs done",
  "step 5": "Return the number of jobs done and the maximum profit earned.",
};

const stepDescriptions = document.querySelectorAll(".step-description");

for (let i = 0; i < stepDescriptions.length; i++) {
  const stepDescription = stepDescriptions[i];
  const stepNumber = stepDescription.parentNode
    .querySelector(".step-number")
    .textContent.trim();
  stepDescription.textContent = steps[`step ${stepNumber}`];
}

const steps2 = {
  "step 1": "Sort the jobs by their end times.",
  "step 2": "Initialize a list of maximum profits.",
  "step 3": "Compute the maximum profit for each job i.",
  "step 4":
    "For each job, starting from the job with the highest profit, check if there is a slot available in the binary array from the deadline of the job to the earliest possible time. If there is a slot available, mark that slot as True and add the profit of the job to the maximum profit earned. Increment the number of jobs done",
  "step 5":
    " Find the maximum profit that can be earned by selecting any subset of jobs.",
};

const stepDescriptions2 = document.querySelectorAll(".step-description2");

for (let i = 0; i < stepDescriptions2.length; i++) {
  const stepDescription2 = stepDescriptions2[i];
  const stepNumber2 = stepDescription2.parentNode
    .querySelector(".step-number2")
    .textContent.trim();
  stepDescription2.textContent = steps2[`step ${stepNumber2}`];
}

const IO = {
  "in 1": "Input: Set of N jobs in the form (Jobid, Deadline, Profit)",
  "out 1": "Output: Sorted list of jobs in decreasing order of their profit",
  "in 2": "Input: Maximum deadline among all jobs",
  "out 2":
    "Output: Binary array of size equal to the maximum deadline, with all elements set to False.",
  "in 3":
    "Input: Job to be processed, binary array of size equal to the maximum deadline",
  "out 3":
    "Output: Updated binary array of size equal to the maximum deadline, updated number of jobs done, updated maximum profit earned",
  "in 4":
    "Input: Job to be processed, binary array of size equal to the maximum deadline, updated number of jobs done, updated maximum profit earned",
  "out 4":
    "Output: Updated binary array of size equal to the maximum deadline, updated number of jobs done, updated maximum profit earned",
  "in 5": "Input: Updated number of jobs done, updated maximum profit earned",
  "out 5": "Output: Number of jobs done, maximum profit earned",
};

const stepIO = document.querySelectorAll(".step-IO");

for (let i = 0; i < stepIO.length; i++) {
  let IOList = stepIO[i].querySelector("ul");
  let index = i + 1;
  for (let key in IO) {
    if (key.includes(` ${index}`)) {
      let IOItem = document.createElement("li");
      IOItem.innerText = IO[key];
      IOList.appendChild(IOItem);
    }
  }
}

const IO2 = {
  "in 1":
    "Input: A list of N jobs, where each job is represented by a tuple (start_time, end_time, profit).",
  "out 1":
    "Output: A sorted list of N jobs, where each job is sorted by their end times in non-descending order.",
  "in 2": "Input: A sorted list of N jobs.",
  "out 2": "Output: A list of size N, initialized to 0.",
  "in 3":
    "Input: A sorted list of N jobs, a list of maximum profits initialized to 0.",
  "out 3":
    "Output: The maximum profit that can be earned for each job i, stored in the list of maximum profits.",
  "in 4":
    "Input:  A sorted list of N jobs, a list of maximum profits initialized to 0, and the maximum profit for each job j < i, stored in the list of maximum profits.",
  "out 4":
    "Output: The maximum profit that can be earned by selecting job i, stored in the list of maximum profits.",
  "in 5": "Input:  A list of maximum profits for all jobs.",
  "out 5":
    "Output: The maximum profit that can be earned by selecting any subset of non-overlapping jobs from the list.",
};

const stepIO2 = document.querySelectorAll(".step-IO2");

for (let i = 0; i < stepIO2.length; i++) {
  let IOList2 = stepIO2[i].querySelector("ul");
  let index2 = i + 1;
  for (let key in IO2) {
    if (key.includes(` ${index2}`)) {
      let IOItem2 = document.createElement("li");
      IOItem2.innerText = IO2[key];
      IOList2.appendChild(IOItem2);
    }
  }
}

const buttons = document.querySelectorAll(".langs");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.value;
    const codeSnippets = document.querySelectorAll(".code-snippet");
    codeSnippets.forEach((snippet) => {
      snippet.style.display = "none";
    });
    const selectedSnippet = document.querySelector(`#${lang}-code`);
    selectedSnippet.style.display = "block";
  });
});

const codes = {
  cpp :`#include <iostream>
  #include <vector>
  #include <algorithm>
  using namespace std;
  
  struct Job {
      int id;
      int deadline;
      int profit;
  };
  
  bool compareJobs(const Job& a, const Job& b) {
      return a.profit > b.profit;
  }
  
  vector<int> maxProfit(const vector<Job>& jobs) {
      // sort jobs in descending order of profit
      vector<Job> sortedJobs = jobs;
      sort(sortedJobs.begin(), sortedJobs.end(), compareJobs);
      
      int n = jobs.size();
      int maxDeadline = 0;
      for (int i = 0; i < n; i++) {
          maxDeadline = max(maxDeadline, jobs[i].deadline);
      }
      vector<bool> slot(maxDeadline, false);
  
      int count = 0;
      int profit = 0;
      for (int i = 0; i < n; i++) {
          int j = jobs[i].deadline - 1;
          while (j >= 0 && slot[j]) {
              j--; // find first available slot
          }
          if (j >= 0) {
              slot[j] = true; // mark slot as occupied
              count++;
              profit += jobs[i].profit;
          }
      }
  
      return {count, profit};
  }
  
  int main() {
      vector<Job> jobs = {
          {1, 4, 20},
          {2, 1, 10},
          {3, 1, 40},
          {4, 1, 30}
      };
      vector<int> result = maxProfit(jobs);
      cout << "Number of jobs done: " << result[0] << endl;
      cout << "Maximum profit: " << result[1] << endl;
      return 0;
  }
  `,
  dart : `int maxProfit(List<List<int>> jobs) {
    int len = jobs.length;
    jobs.sort((a, b) => a[1] - b[1]);
    List<int> table = List<int>.filled(len + 1, 0);
    
    for (int j = 1; j <= len; j++) {
      int i = j - 1;
      while (i >= 0 && jobs[i][1] > jobs[j - 1][0]) {
        i--;
      }
      table[j] = jobs[j - 1][2] + (i >= 0 ? table[i + 1] : 0);
      table[j] = table[j] > table[j - 1] ? table[j] : table[j - 1];
    }
    
    return table[len];
  }
  
  void main() {
    List<List<int>> jobs = [
      [1, 6, 6],
      [2, 5, 5],
      [5, 7, 5],
      [6, 8, 3]
    ];
    
    print(maxProfit(jobs));
  }`,
  java : `import java.util.*;

  class Job {
      int id;
      int deadline;
      int profit;
  
      public Job(int id, int deadline, int profit) {
          this.id = id;
          this.deadline = deadline;
          this.profit = profit;
      }
  }
  
  public class JobScheduler {
      public static void main(String[] args) {
          List<Job> jobs = new ArrayList<>();
          jobs.add(new Job(1, 4, 20));
          jobs.add(new Job(2, 1, 10));
          jobs.add(new Job(3, 1, 40));
          jobs.add(new Job(4, 1, 30));
  
          int[] result = scheduleJobs(jobs);
          System.out.println("Number of jobs done: " + result[0]);
          System.out.println("Maximum profit: " + result[1]);
      }
  
      public static int[] scheduleJobs(List<Job> jobs) {
          // sort jobs in descending order of profit
          Collections.sort(jobs, (a, b) -> b.profit - a.profit);
  
          int n = jobs.size();
          int maxDeadline = Collections.max(jobs, (a, b) -> a.deadline - b.deadline).deadline;
          boolean[] slot = new boolean[maxDeadline];
  
          int count = 0, profit = 0;
          for (int i = 0; i < n; i++) {
              int j = jobs.get(i).deadline - 1;
              while (j >= 0 && slot[j]) {
                  j--; // find first available slot
              }
              if (j >= 0) {
                  slot[j] = true; // mark slot as occupied
                  count++;
                  profit += jobs.get(i).profit;
              }
          }
  
          return new int[]{count, profit};
      }
  }`,
  js : `class Job {
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
  console.log(\`Number of jobs done: ${count}\`);
  console.log(\`Maximum profit: ${profit}\`);`,
  php : `class Job {
    public $id;
    public $deadline;
    public $profit;

    public function __construct($id, $deadline, $profit) {
        $this->id = $id;
        $this->deadline = $deadline;
        $this->profit = $profit;
    }
}

function maxProfit($jobs) {
    // sort jobs in descending order of profit
    usort($jobs, function($a, $b) {
        return $b->profit - $a->profit;
    });

    $n = count($jobs);
    $maxDeadline = max(array_map(function($j) {
        return $j->deadline;
    }, $jobs));
    $slot = array_fill(0, $maxDeadline, false);

    $count = 0;
    $profit = 0;
    for ($i = 0; $i < $n; $i++) {
        $j = $jobs[$i]->deadline - 1;
        while ($j >= 0 && $slot[$j]) {
            $j--; // find first available slot
        }
        if ($j >= 0) {
            $slot[$j] = true; // mark slot as occupied
            $count++;
            $profit += $jobs[$i]->profit;
        }
    }

    return [$count, $profit];
}

$jobs = [
    new Job(1, 4, 20),
    new Job(2, 1, 10),
    new Job(3, 1, 40),
    new Job(4, 1, 30)
];
$result = maxProfit($jobs);
echo "Number of jobs done: " . $result[0] . "\n";
echo "Maximum profit: " . $result[1] . "\n";`,
python : `def max_profit(jobs):
jobs.sort(key=lambda x: x[1])
length = len(jobs)
table = [0] * (length + 1)

for j in range(1, length + 1):
    i = j - 1
    while i >= 0 and jobs[i][1] > jobs[j - 1][0]:
        i -= 1
    table[j] = jobs[j - 1][2] + table[i + 1] if i >= 0 else 0
    table[j] = max(table[j], table[j - 1])

return table[length]

jobs = [
[1, 6, 6],
[2, 5, 5],
[5, 7, 5],
[6, 8, 3]
]
print(max_profit(jobs))
`
};

const codeEl = document.querySelectorAll(".code-snippet code");

for (let i = 0; i < codeEl.length; i++) {
  const codeDes = codeEl[i];
  const codeNum = codeDes.classList[0].split("-")[0];
  codeDes.textContent = codes[codeNum];
}

const textareaEl = document.querySelectorAll("textarea");
document.querySelector(".run").addEventListener("click", () => {
  textareaEl[0].textContent = `Maximum number of jobs done: 2
Maximum profit: 60`;
});

const buttons2 = document.querySelectorAll(".langs2");
buttons2.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.value;
    const codeSnippets = document.querySelectorAll(".code-snippet2");
    codeSnippets.forEach((snippet) => {
      if (snippet.id === `${lang}-code`) {
        snippet.style.display = "block";
      } else {
        snippet.style.display = "none";
      }
    });
  });
});

const codes2 = {
  dart: `class Job {
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
  `,
  python: `class Job:
  def __init__(self, id, deadline, profit):
      self.id = id
      self.deadline = deadline
      self.profit = profit

def max_profit(jobs):
  # sort jobs in descending order of profit
  jobs.sort(key=lambda j: j.profit, reverse=True)

  n = len(jobs)
  max_deadline = max(jobs, key=lambda j: j.deadline).deadline
  slot = [False] * max_deadline

  count = 0
  profit = 0
  for i in range(n):
      j = jobs[i].deadline - 1
      while j >= 0 and slot[j]:
          j -= 1 # find first available slot
      if j >= 0:
          slot[j] = True # mark slot as occupied
          count += 1
          profit += jobs[i].profit

  return count, profit

jobs = [Job(1, 4, 20), Job(2, 1, 10), Job(3, 1, 40), Job(4, 1, 30)]
count, profit = max_profit(jobs)
print(f"Number of jobs done: {count}")
print(f"Maximum profit: {profit}")
`,
  js: `class Job {
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
  console.log(\`Number of jobs done: ${count}\`);
  console.log(\`Maximum profit: ${profit}\`);
  `,
  java: `package answers.q2;
  
  import java.util.Arrays;
  
  class Main {
      public static int maxProfit(int[][] jobs) {
          int len = jobs.length;
          Arrays.sort(jobs, (a, b) -> a[1] - b[1]);
          int[] table = new int[len + 1];
  
          for (int j = 1; j <= len; j++) {
              int i = j - 1;
              while (i >= 0 && jobs[i][1] > jobs[j - 1][0]) {
                  i--;
              }
              table[j] = jobs[j - 1][2] + (i >= 0 ? table[i + 1] : 0);
              table[j] = Math.max(table[j], table[j - 1]);
          }
  
          return table[len];
      }
  
      public static void main(String[] args) {
          int[][] jobs = {
              {1, 6, 6},
              {2, 5, 5},
              {5, 7, 5},
              {6, 8, 3}
          };
  
          System.out.println(maxProfit(jobs));
      }
  }`,
  cpp: `#include <iostream>
  #include <algorithm>
  #include <vector>
  using namespace std;
  
  int maxProfit(vector<vector<int>>& jobs) {
      int len = jobs.size();
      sort(jobs.begin(), jobs.end(), [](const vector<int>& a, const vector<int>& b) {
          return a[1] < b[1];
      });
      vector<int> table(len + 1, 0);
  
      for (int j = 1; j <= len; j++) {
          int i = j - 1;
          while (i >= 0 && jobs[i][1] > jobs[j - 1][0]) {
              i--;
          }
          table[j] = jobs[j - 1][2] + (i >= 0 ? table[i + 1] : 0);
          table[j] = max(table[j], table[j - 1]);
      }
  
      return table[len];
  }
  
  int main() {
      vector<vector<int>> jobs = {
          {1, 6, 6},
          {2, 5, 5},
          {5, 7, 5},
          {6, 8, 3}
      };
  
      cout << maxProfit(jobs) << endl;
  
      return 0;
  }`,
  php: `function maxProfit($jobs) {
    usort($jobs, function($a, $b) {
        return $a[1] - $b[1];
    });
    $len = count($jobs);
    $table = array_fill(0, $len + 1, 0);
  
    for ($j = 1; $j <= $len; $j++) {
        $i = $j - 1;
        while ($i >= 0 && $jobs[$i][1] > $jobs[$j - 1][0]) {
            $i--;
        }
        $table[$j] = $jobs[$j - 1][2] + ($i >= 0 ? $table[$i + 1] : 0);
        $table[$j] = max($table[$j], $table[$j - 1]);
    }
  
    return $table[$len];
  }
  
  $jobs = [
    [1, 6, 6],
    [2, 5, 5],
    [5, 7, 5],
    [6, 8, 3]
  ];
  echo maxProfit($jobs);
  `,
};

const codeEl2 = document.querySelectorAll(".code-snippet2 code");
for (let i = 0; i < codeEl2.length; i++) {
  const codeDes = codeEl2[i];
  const codeNum = codeDes.classList[0].split("-")[0];
  codeDes.textContent = codes2[codeNum];
}

document.querySelector(".run2").addEventListener("click", () => {
  textareaEl[1].textContent = `The maximum profit that can be earned by selecting a subset of non-overlapping jobs from the given jobs list : 11`;
});
