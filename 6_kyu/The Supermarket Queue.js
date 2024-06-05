/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.


*/
function queueTime(customers, n) {
  // Initialize an array of length n with 0s, representing the wait time for each till
  const tillWaitTimes = new Array(n).fill(0);
  
  // Loop through each customer
  for (let i = 0; i < customers.length; i++) {
  // Find the till with the shortest wait time and add the customer's checkout time
    const shortestWaitTimeIndex = tillWaitTimes.indexOf(Math.min(...tillWaitTimes));
    tillWaitTimes[shortestWaitTimeIndex] += customers[i];
  }
  
  // Return the time it took for all customers to check out, which is the longest wait time among all the tills
  return Math.max(...tillWaitTimes);
}