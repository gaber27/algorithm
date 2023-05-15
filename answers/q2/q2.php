function maxProfit($jobs) {
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
