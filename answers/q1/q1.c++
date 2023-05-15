#include <iostream>
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
