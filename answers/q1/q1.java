import java.util.*;

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
}
