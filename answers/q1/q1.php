class Job {
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
echo "Maximum profit: " . $result[1] . "\n";
