package answers.q2;

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
}

