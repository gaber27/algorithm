int maxProfit(List<List<int>> jobs) {
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
}
