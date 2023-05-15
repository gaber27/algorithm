#include <iostream>
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
}
