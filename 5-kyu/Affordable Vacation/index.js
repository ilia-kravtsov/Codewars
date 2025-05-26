/*
The student has big plans for summer vacation after a stressful academic year. He has saved up some money and decided to travel to a neighboring city for a few consecutive days. Inspired by the desire to spend time in a new place, he compiled a list of housing rental costs for each of the anticipated days and recorded them in an array named cost.

Task
Find the cheapest accommodation for student's vacation.
It is guaranteed that the length of the cost array is greater than or equal to the duration of the vacation.

If there is enough money for travelling, return the answer in the format:
"money: {minimum_money_for_vacation}"
Otherwise, return the maximum duration of the vacation in the format:
"days: {maximum_duration_of_vacation}" 
Help the student find the optimal solution for his summer vacation!

Examples
| money | days | cost          | result      |
|-------|------|---------------|-------------|
| 10    | 1    | [5]           | "money: 5"  |
| 10    | 1    | [3, 2, 4]     | "money: 2"  |
| 10    | 2    | [3, 7, 6]     | "money: 10" |
| 10    | 1    | [20, 15, 30]  | "days: 0"   |
| 10    | 2    | [9, 6, 7, 4]  | "days: 1"   |
| 50    | 3    | [10, 40, 5]   | "days: 2"   |
Constraints for random tests (depends on language)
|                      | small   | medium | extra_large  |
|----------------------|---------|--------|--------------|
| tests                | 10      | 10     | 10           |
| money                | 1-10    | 1-50   | 1 to 30-300M |
| days                 | 1-4     | 1-20   | 1 to 0.03-3M |
| cost.length          | 1-10    | 1-50   | 1 to 0.1-15M |
| cost[i]              | 1-10    | 1-10   | 1 to 400     |
| cost.length >= days  | true    | true   | true         |
Solutions with a time complexity slower than O(n) will fail to pass extra large tests
*/

function findMinCost(money, days, cost) {
  let n = cost.length;
  
  let prefixSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + cost[i];
  }

  let minCost = Infinity;
  for (let i = 0; i <= n - days; i++) {
    let currentCost = prefixSum[i + days] - prefixSum[i];
    minCost = Math.min(minCost, currentCost);
  }

  if (minCost <= money) {
    return `money: ${minCost}`;
  }

  let maxDays = 0;
  let currentSum = 0;
  let left = 0;

  for (let right = 0; right < n; right++) {
    currentSum += cost[right];

    while (currentSum > money && left <= right) {
      currentSum -= cost[left];
      left++;
    }

    maxDays = Math.max(maxDays, right - left + 1);
  }

  return maxDays === 0 ? "days: 0" : `days: ${maxDays}`;
}