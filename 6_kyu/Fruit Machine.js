/*
Introduction
Slot machine (American English), informally fruit machine (British English), puggy (Scottish English slang), the slots (Canadian and American English), poker machine (or pokies in slang) (Australian English and New Zealand English) or simply slot (American English), is a casino gambling machine with three or more reels which spin when a button is pushed. Slot machines are also known as one-armed bandits because they were originally operated by one lever on the side of the machine as distinct from a button on the front panel, and because of their ability to leave the player in debt and impoverished. Many modern machines are still equipped with a legacy lever in addition to the button. (Source Wikipedia)

Task
You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.
Rules
1. There are always exactly three reels

2. Each reel has 10 different items.

3. The three reel inputs may be different.

4. The spin array represents the index of where the reels finish.

5. The three spin inputs may be different

6. Three of the same is worth more than two of the same

7. Two of the same plus one "Wild" is double the score.

8. No matching items returns 0.
Scoring
Item
Three of the same
Two of the same
Two of the same plus one Wild
Wild
100
10
N/A
Star
90
9
18
Bell
80
8
16
Shell
70
7
14
Seven
60
6
12
Cherry
50
5
10
Bar
40
4
8
King
30
3
6
Queen
20
2
4
Jack
10
1
2
 

Returns
Return an integer of the score.
Example
Initialise
reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
spin = [5,5,5];
result = fruit([reel1,reel2,reel3],spin);
Scoring
reel1[5] == "Cherry"
reel2[5] == "Cherry"
reel3[5] == "Cherry"

Cherry + Cherry + Cherry == 50
Return
result == 50
*/
function fruit(reels, spins) {

  const scoring = {
      "Wild": { three: 100, two: 10, twoAndWild: 0 },
      "Star": { three: 90, two: 9, twoAndWild: 18 },
      "Bell": { three: 80, two: 8, twoAndWild: 16 },
      "Shell": { three: 70, two: 7, twoAndWild: 14 },
      "Seven": { three: 60, two: 6, twoAndWild: 12 },
      "Cherry": { three: 50, two: 5, twoAndWild: 10 },
      "Bar": { three: 40, two: 4, twoAndWild: 8 },
      "King": { three: 30, two: 3, twoAndWild: 6 },
      "Queen": { three: 20, two: 2, twoAndWild: 4 },
      "Jack": { three: 10, two: 1, twoAndWild: 2 }
  };

  const reel1Item = reels[0][spins[0]];
  const reel2Item = reels[1][spins[1]];
  const reel3Item = reels[2][spins[2]];

  if (reel1Item === reel2Item && reel2Item === reel3Item) {
    return scoring[reel1Item].three;
  }

  if (reel1Item === reel2Item || reel1Item === reel3Item || reel2Item === reel3Item) {
      if (reel1Item === "Wild" && reel2Item === reel3Item) {
          return scoring[reel2Item].twoAndWild;
      } else if (reel2Item === "Wild" && reel1Item === reel3Item) {
          return scoring[reel1Item].twoAndWild;
      } else if (reel3Item === "Wild" && reel1Item === reel2Item) {
          return scoring[reel1Item].twoAndWild;
      } else if (reel1Item === reel2Item) {
          return scoring[reel1Item].two;
      } else if (reel1Item === reel3Item) {
          return scoring[reel1Item].two;
      } else if (reel2Item === reel3Item) {
          return scoring[reel2Item].two;
      }
      return scoring[reel1Item].two + scoring[reel2Item].two + scoring[reel3Item].two;
  }

  return 0;
}