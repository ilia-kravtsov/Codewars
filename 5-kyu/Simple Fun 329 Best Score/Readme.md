Task
In the city where John lives, there are two basketball teams: team A and team B. Two teams play a game every week.

We know there is a "three-point line" in the basketball court. When a player throws a ball, he can get 2 points if he is standing inside the "three-point line"; otherwise, he can get 3 points.

John is a fan of the team A. He has a special ability (Magic?): He can change the position of the three-point line. Of course, he'll change to the best position for the team A.

Given two integer array teamA and teamB, each element is the distance a player stands when he shoots. Your task is to calculate the best score for the teamA when John uses the special ability (Magic).

Note, the return value is the difference between the score of two teams: teamA's score - teamB's score

Example
For teamA = [1,2,3], teamB = [6,5], the output should be 3.

The three-point line set to 1 meter, then:

teamA's score = 3 x 3 = 9, teamB's score = 2 x 3 = 6

9 - 6 = 3

For teamA = [6,5], teamB = [1,2,3], the output should be 0.

The three-point line set to 5 meter, then:

teamA's score = 2 x 3 = 6, teamB's score = 3 x 2 = 6

6 - 6 = 0