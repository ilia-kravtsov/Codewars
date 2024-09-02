/*
Alex is a devoted fan of snooker Masters and in particular, he recorded results of all matches. Help Alex to know the score of matches.

Hint:
A string with a score presented as follows: "24-79(72); 16-101(53); ..."
"24" - Points scored the first player;
"79" - the number of points of the second player.
"(72)" - the maximum score for one approach.
Also, the player's account may be expressed as 105(53,52):
"105" - points in the frame, "53" and "52" - two separate numbers(not float) maximum points in the frame.
Frames are separated by ";" and players score - "-"
It should count the number of frames won by one and another player, and output the data as a "[10,7]"
*/

function frame(score) {
  const frames = score.split(";");

  let player1Wins = 0;
  let player2Wins = 0;

  for (let frame of frames) {
    if (frame.trim() === "") continue; // skip empty frames (if any)

    const [player1Score, player2ScoreWithBreaks] = frame.split("-");

    const player1Points = parseInt(player1Score);
    const player2Points = parseInt(player2ScoreWithBreaks.split("(")[0]);

    if (player1Points > player2Points) {
      player1Wins++;
    } else if (player2Points > player1Points) {
      player2Wins++;
    }
  }

  return [player1Wins, player2Wins];
}
