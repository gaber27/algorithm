function max_Profit(jobs) {
    jobs.sort((x, y) => y[2] - x[2]); 
    let number_Jobs = jobs.length;
    let max_Profit = 0; 
    let max_Jobs_Done = 0; 
    let schedule = new Array(number_Jobs).fill(false); 
    }