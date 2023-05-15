/*
- Create By Gaber Tarek
- 15/5/2023 


*/

function max_Profit(jobs) {
  jobs.sort((x, y) => y[2] - x[2]); 
  let number_Jobs = jobs.length;
  let max_Profit = 0; 
  let max_Jobs_Done = 0; 
  let schedule = new Array(number_Jobs).fill(false); 
  for (let j = 0; j < number_Jobs; j++) {
      let latestAvailableSlot = Math.min(number_Jobs, jobs[j][1]) - 1;
      while (latestAvailableSlot >= 0 && schedule[latestAvailableSlot]) {
          latestAvailableSlot--;
      }
      if (latestAvailableSlot >= 0) {
      schedule[latestAvailableSlot] = true;
      max_Profit += jobs[j][2];
      max_Jobs_Done++;
      }
  }
  return [max_Jobs_Done, max_Profit];
  }
  const Jobs = [[1,4,20],[2,1,10],[3,1,40],[4,1,30]]
  const [jobsDone, totalProfit] = max_Profit(Jobs);
  console.log(jobsDone,totalProfit)