class Job:
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
