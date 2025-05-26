/*
The problem
A common way to prevent data loss in case of hard disk failures is to use an array of disks that keep the information redundant. If a disk fails, the information can be recovered based on the information contained in the other disks.

The simplest example to reason about this is by having two disks with exactly the same information mirrored on each other. While this solves the problem, is not very efficient.

  diskA = [0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0]
  diskB = [0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0]
Example1. Two identical disks. If one fails, it can be rebuilt by cloning the surviving disk.

A better method is to use XOR for parity checks. A simple use of XOR to create parity on an array of disks is to use several disks of the same size and reserve one of them to hold parity information.

Let's start with a three disk array: A, B and C. We'll store our data on A and B, and we'll use C to store parity information.

  diskA = [0,0,0,1,1,1,1,0]
  diskB = [0,1,0,0,1,0,1,0]
Example 2. Same data as before, split in two arrays.

This is how we calculate the values for C: For each position in the array, we count how many ones there are. If it's an odd amount of them, we set 1 on C. If it's an even amount, we put zero.

For instance, A[0]==0 and B[0]==0, so we set C[0]=0, but A[1]==0 and B[1]==1, so we set C[1]=1.

  diskC = [0,1,0,1,0,1,0,0]
Example 3. Parity array calculated from values from diskA and diskB

If any of the disks is damaged, it can be rebuilt by recalculating the parity information.

You are not restricted to 3 arrays, you can have as many arrays as you like.

  diskA = [0,0,0,1]
  diskB = [1,1,1,0]
  diskC = [0,1,0,0]
  diskD = [1,0,1,0]
  diskE = [0,0,0,1]
Example 4. The same data distributed across disks A-D and diskE used for parity

The challenge
In this Kata, you are going to write two functions calculateParity(cluster) and recoverDisk(cluster).

calculateParity()
The function calcualateParity(cluster) receives a an array of n arrays of zeros and ones, all of the same length l. It must calculate the parity of the cluster and return an array of n+1 arrays of length l (with the parity array appended at the end).

e.g. Input:

[[0,0,0,1],
 [1,1,0,0]]
Output

[[0,0,0,1],
 [1,1,0,0],
 [1,1,0,1]]
recoverDisk()
The function recoverDisk(cluster) recieves an array of n arrays of zeros and ones (each of the same length) which are using XOR parity. One (and only one) of the arrays on the cluster is damaged. Damaged positions are marked with null. The function must repair the array return the fixed cluster.

e.g.

Input

[[0,0,0,1],
 [null,1,0,0],
 [1,1,0,1]]
Output

[[0,0,0,1],
 [1,1,0,0],
 [1,1,0,1]]
*/

function calculateParity(cluster) {
  const parityArray = [];
  
  for (let i = 0; i < cluster[0].length; i++) {
    let count = 0;
    
    for (let j = 0; j < cluster.length; j++) {
      if (cluster[j][i] === 1) {
        count++;
      }
    }
    
    parityArray.push(count % 2);
  }
  
  cluster.push(parityArray);
  return cluster;
}

function recoverDisk(cluster) {
  const repairedCluster = [];

  for (let i = 0; i < cluster[0].length; i++) {
    let sum = 0;
    let nullCount = 0;
    let nullIndex = -1;

    for (let j = 0; j < cluster.length; j++) {
      if (cluster[j][i] === null) {
        nullCount++;
        nullIndex = j;
      } else {
        sum ^= cluster[j][i];
      }
    }

    if (nullCount === 1) {
      cluster[nullIndex][i] = sum;
    }
  }

  return cluster;
}