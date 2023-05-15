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
  dart: `List<int> maxProfit(List<List<int>> jobs) {
    jobs.sort((a, b) => b[2] - a[2]); // Sort by profit
    int numJobs = jobs.length; // number of jobs
    int maxProfit = 0; // maximum profit
    int maxJobsDone = 0; // maximum number of jobs done
    List<bool> schedule = List.filled(numJobs, false); // schedule of jobs
    for (int i = 0; i < numJobs; i++) {
      // Find the latest slot for the job
      int latestAvailableSlot = numJobs.clamp(0, jobs[i][1]) - 1;
      while (latestAvailableSlot >= 0 && schedule[latestAvailableSlot]) {
        latestAvailableSlot--;
      }
      if (latestAvailableSlot >= 0) {
        // Schedule the job in the available slot
        schedule[latestAvailableSlot] = true;
        maxProfit += jobs[i][2];
        maxJobsDone++;
      }
    }
    return [maxJobsDone, maxProfit];
  }
  var jobs = [[1,4,20],[2,1,10],[3,1,40],[4,1,30]];
var result = maxProfit(jobs);
var jobsDone = result[0];
var totalProfit = result[1];
`,
  python: `def max_profit(jobs):
  jobs.sort(key=lambda x: x[2], reverse=True) # Sort by profit
  num_jobs = len(jobs) # number of jobs
  max_profit = 0 # maximum profit
  max_jobs_done = 0 # maximum number of jobs done
  schedule = [False] * num_jobs # schedule of jobs
  for i in range(num_jobs):
      latest_available_slot = min(num_jobs, jobs[i][1]) - 1 # Find the latest slot for the job
      while latest_available_slot >= 0 and schedule[latest_available_slot]:
          latest_available_slot -= 1
      if latest_available_slot >= 0:
          schedule[latest_available_slot] = True # Schedule the job in the available slot
          max_profit += jobs[i][2]
          max_jobs_done += 1
  return [max_jobs_done, max_profit]
  jobs = [[1,4,20],[2,1,10],[3,1,40],[4,1,30]]
jobs_done, total_profit = max_profit(jobs)
`,
  java: `public static int[] findMaxProfitJobs(int[][] jobs) {
    // Sort jobs in decreasing order of profit
    Arrays.sort(jobs, (a, b) -> b[2] - a[2]);

    int n = jobs.length;
    int maxProfit = 0;
    int maxJobsDone = 0;
    boolean[] schedule = new boolean[n];

    for (int i = 0; i < n; i++) {
        // Find the latest available slot for the current job
        int slot = Math.min(n, jobs[i][1]) - 1;
        while (slot >= 0 && schedule[slot]) {
            slot--;
        }

        if (slot >= 0) {
            // Schedule the job in the available slot
            schedule[slot] = true;
            maxProfit += jobs[i][2];
            maxJobsDone++;
        }
    }

    return new int[] {maxJobsDone, maxProfit};
}`,
  cpp: `#include <vector>
#include <algorithm>
using namespace std;

vector<int> maxProfit(vector<vector<int>> jobs) {
  sort(jobs.begin(), jobs.end(), [](vector<int> a, vector<int> b) { return b[2] < a[2]; }); // Sort by profit
  int numJobs = jobs.size(); // number of jobs
  int maxProfit = 0; // maximum profit
  int maxJobsDone = 0; // maximum number of jobs done
  vector<bool> schedule(numJobs, false); // schedule of jobs
  for (int i = 0; i < numJobs; i++) {
    int latestAvailableSlot = min(numJobs, jobs[i][1]) - 1; // Find the latest slot for the job
    while (latestAvailableSlot >= 0 && schedule[latestAvailableSlot]) {
      latestAvailableSlot--;
    }
    if (latestAvailableSlot >= 0) {
      schedule[latestAvailableSlot] = true; // Schedule the job in the available slot
      maxProfit += jobs[i][2];
      maxJobsDone++;
    }
  }
  return {maxJobsDone, maxProfit};
}
vector<vector<int>> jobs = {{1,4,20},{2,1,10},{3,1,40},{4,1,30}};
auto result = maxProfit(jobs);
auto jobsDone = result[0];
auto totalProfit = result[1];
`,
  js: `function maxProfit(jobs) {
  jobs.sort((a, b) => b[2] - a[2]);  // Sort by profit
  let numJobs = jobs.length; // number of jobs
  let maxProfit = 0; // maximum profit
  let maxJobsDone = 0; // maximum number of jobs done
  let schedule = new Array(numJobs).fill(false); // schedule of jobs
  for (let i = 0; i < numJobs; i++) {
    // Find the latest slot for the job
    let latestAvailableSlot = Math.min(numJobs, jobs[i][1]) - 1;
    while (latestAvailableSlot >= 0 && schedule[latestAvailableSlot]) {
      latestAvailableSlot--;
    }
    if (latestAvailableSlot >= 0) {
      // Schedule the job in the available slot
      schedule[latestAvailableSlot] = true;
      maxProfit += jobs[i][2];
      maxJobsDone++;
    }
  }
  return [maxJobsDone, maxProfit];
}
const Jobs = [[1,4,20],[2,1,10],[3,1,40],[4,1,30]]
  const [jobsDone, totalProfit] = maxProfit(Jobs);`,
  php: `function findMaxProfitJobs($jobs) {
  // Sort jobs in decreasing order of profit
  usort($jobs, function($a, $b) {
      return $b[2] - $a[2];
  });

  $n = count($jobs);
  $maxProfit = 0;
  $maxJobsDone = 0;
  $schedule = array_fill(0, $n, false);

  for ($i = 0; $i < $n; $i++) {
      // Find the latest available slot for the current job
      $slot = min($n, $jobs[$i][1]) - 1;
      while ($slot >= 0 && $schedule[$slot]) {
          $slot--;
      }

      if ($slot >= 0) {
          // Schedule the job in the available slot
          $schedule[$slot] = true;
          $maxProfit += $jobs[$i][2];
          $maxJobsDone++;
      }
  }

  return [$maxJobsDone, $maxProfit];
}
$jobs = array(array(1,4,20), array(2,1,10), array(3,1,40), array(4,1,30));
$result = maxProfit($jobs);
$jobsDone = $result[0];
$totalProfit = $result[1];
`,
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
  dart: `int maxProfit(List<List<int>> jobs) {
    int N = jobs.length;
    jobs.sort((a, b) => a[1].compareTo(b[1]));
    List<int> dp = List.filled(N + 1, 0);
  
    for (int j = 1; j <= N; j++) {
      int i = j - 1;
      while (i >= 0 && jobs[i][1] > jobs[j - 1][0]) {
        i--;
      }
      dp[j] = jobs[j - 1][2] + (i >= 0 ? dp[i + 1] : 0);
      dp[j] = dp[j] > dp[j - 1] ? dp[j] : dp[j - 1];
    }
  
    return dp[N];
  }
  
  void main() {
    List<List<int>> jobs = [    [1, 6, 6],
      [2, 5, 5],
      [5, 7, 5],
      [6, 8, 3]
    ];
    int maxProfitValue = maxProfit(jobs);
    print(maxProfitValue);
  }`,
  js: `function maxProfit(jobs) {
    const N = jobs.length;
    jobs.sort((a, b) => a[1] - b[1]);
    const dp = new Array(N + 1).fill(0);
  
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
  
  const jobs = [  [1, 6, 6],
    [2, 5, 5],
    [5, 7, 5],
    [6, 8, 3]
  ];
  console.log(maxProfit(jobs));`,
  php: `function maxProfit($jobs) {
    $N = count($jobs);
    usort($jobs, function($a, $b) {
      return $a[1] - $b[1];
    });
    $dp = array_fill(0, $N + 1, 0);
  
    for ($j = 1; $j <= $N; $j++) {
      $i = $j - 1;
      while ($i >= 0 && $jobs[$i][1] > $jobs[$j - 1][0]) {
        $i--;
      }
      $dp[$j] = $jobs[$j - 1][2] + ($i >= 0 ? $dp[$i + 1] : 0);
      $dp[$j] = max($dp[$j], $dp[$j - 1]);
    }
  
    return $dp[$N];
  }
  
  $jobs = [
    [1, 6, 6],
    [2, 5, 5],
    [5, 7, 5],
    [6, 8, 3]
  ];
  echo maxProfit($jobs);`,
  python: `def max_profit(jobs):
  N = len(jobs)
  jobs.sort(key=lambda x: x[1])
  dp = [0] * (N + 1)

  for j in range(1, N + 1):
      i = j - 1
      while i >= 0 and jobs[i][1] > jobs[j - 1][0]:
          i -= 1
      dp[j] = jobs[j - 1][2] + dp[i + 1] if i >= 0 else jobs[j - 1][2]
      dp[j] = max(dp[j], dp[j - 1])

  return dp[N]

jobs = [    [1, 6, 6],
  [2, 5, 5],
  [5, 7, 5],
  [6, 8, 3]
]
print(max_profit(jobs))`,
  cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int maxProfit(vector<vector<int>>& jobs) {
    int N = jobs.size();
    sort(jobs.begin(), jobs.end(), [](vector<int>& a, vector<int>& b) {
        return a[1] < b[1];
    });
    vector<int> dp(N + 1, 0);

    for (int j = 1; j <= N; j++) {
        int i = j - 1;
        while (i >= 0 && jobs[i][1] > jobs[j - 1][0]) {
            i--;
        }
        dp[j] = jobs[j - 1][2] + (i >= 0 ? dp[i + 1] : 0);
        dp[j] = max(dp[j], dp[j - 1]);
    }

    return dp[N];
}

int main() {
    vector<vector<int>> jobs = {
        {1, 6, 6},
        {2, 5, 5},
        {5, 7, 5},
        {6, 8, 3}
    };
    cout << maxProfit(jobs);

    return 0;
}`,
  java: `import java.util.*;

class Main {
    public static int maxProfit(int[][] jobs) {
        int N = jobs.length;
        Arrays.sort(jobs, Comparator.comparingInt(a -> a[1]));
        int[] dp = new int[N + 1];

        for (int j = 1; j <= N; j++) {
            int i = j - 1;
            while (i >= 0 && jobs[i][1] > jobs[j - 1][0]) {
                i--;
            }
            dp[j] = jobs[j - 1][2] + (i >= 0 ? dp[i + 1] : 0);
            dp[j] = Math.max(dp[j], dp[j - 1]);
        }

        return dp[N];
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
};

const codeEl2 = document.querySelectorAll(".code-snippet2 code");
for (let i = 0; i < codeEl2.length; i++) {
  const codeDes = codeEl2[i];
  const codeNum = codeDes.classList[0].split("-")[0];
  codeDes.textContent = codes2[codeNum];
}

document.querySelector(".run2").addEventListener("click", () => {
  textareaEl[1].textContent = `The maximum profit that can be earned by selecting a subset of non-overlapping jobs from the given jobs list : 10`;
});