def max_profit(jobs):
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
