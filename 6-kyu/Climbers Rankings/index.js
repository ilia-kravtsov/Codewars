/*
International Federation of Sports Climbing (ISFC) hired You to create "Rank Calculator". Climbers get points for each competition they attend, if they are in the top 30 (1st gets 100, 2nd: 80, 3rd: 65, 4th: 55, 5th: 51,...).

Overall rankings are calculated by summing the best 6 results for each climber respectively. If climber has less than 6 results, existing ones are taken.

#Task: Create GetRankings function, that will take collection of climbers' names with their results, and return collection of climbers' names and sum of their best 6 results. Returned collection should be ordered by sum of results in descending order. With other words: climber with highest sum of points should be first, climber with lowest sum of points should be last.

#Example:

Input:  [{"name":"SKOFIC Domen", "points":[55, 100, 100, 25, 100, 51, 80]}, {"name":"SCHUBERT Jakob", "points":[80, 80, 40, 47, 65, 100, 65, 37]}]
Output: [{"name":"SKOFIC Domen", "points":486}, {"name":"SCHUBERT Jakob", "points":437}]
Notes
Not every climber attended all competitions (there can be less than 6 results for climber).
Only best 6 results are summed at maximum.
*/
class RankCalculator {
  static GetRankings(pointsByClimber) {
    const rankings = pointsByClimber.map(climber => {
      const top6Points = climber.points.sort((a, b) => b - a).slice(0, 6);
      const totalPoints = top6Points.reduce((sum, points) => sum + points, 0);
      return {
        name: climber.name,
        points: totalPoints
      };
    });

    return rankings.sort((a, b) => b.points - a.points);
  }
}
/**/
/**/