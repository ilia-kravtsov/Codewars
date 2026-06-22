Imagine a game level represented as a two dimensional array containing fields which the player can traverse. The player can move up through the rows and sideways through the columns. A 4x4 level might look like this:

rows
0 |__|__|__|__|
1 |__|__|PL|__|              PL = Player position
2 |__|__|__|__|
3 |__|__|__|__|
0  1  2  3  columns
In this example the player is at row: 1, column: 2. As mentioned, you can move straight up (to row: 2, column: 2) or sideways (e.g. to row: 1, column: 3), but never down.
OK? Good.
It gets more complicated; some of the fields are blocked and the player has to navigate around them (bet you weren't expecting that ay?):

rows
0 |__|□□|□□|__|
2 |__|__|__|__|
1 |__|__|PL|□□|              □□ = Blocked field
3 |□□|__|__|□□|
0  1  2  3  columns
Damn those pesky level designers.. they've asked you to type up some magical algortihm that can check whether a given level is beatable i.e. that there is at least one valid path from the player's position all the way to the top row.

An unwinnable level:

0 |__|PL|__|__|
1 |__|__|__|__|         "That's bullsh*t!" - Player
2 |□□|□□|□□|□□|
3 |__|__|__|__|
0  1  2  3
Your task is to write a function that will return the number of reachable fields in the last/top row.

int GetNumberOfReachableFields(bool[][] grid, int rows, int columns, int startRow, int startColumn)
INPUT
grid: A 2d array of boolean values; true or 1 means a field is traversable, false or 0 means it's blocked. Access the array using grid[row][col].
rows: Number of rows in the grid/level. (1 <= rows <= 2000)
columns: Number of columns in the grid/level. (1 <= columns <= 500)
startRow: The row of the player's starting position. (0 <= startRow < rows)
startColumn: The column of the player's starting position. (0 <= startColumn < columns)

OUTPUT
Return, as an integer value greater or equal to zero, the number of unique fields in row: grid[rows-1] that the player can reach using the aforementioned moves (step forward, left or right).

More level examples:

RE = Reachable field

    0  1  2           0  1  2  3           0  1  2  3             0
0 |__|PL|__|      0 |__|□□|__|PL|      0 |□□|□□|__|□□|        0 |PL|
1 |__|__|__|      1 |□□|□□|__|__|      1 |□□|PL|__|__|        1 |__|
2 |__|□□|□□|      2 |__|__|□□|□□|     2 |__|__|□□|□□|        2 |RE|
3 |__|__|__|                           3 |□□|__|__|__|
4 |RE|RE|RE|                           4 |RE|RE|□□|RE|
Output: 3           Output: 0            Output: 3         Output: 1
NOTES
• The player cannot step onto a blocked field and diagonal moves are not allowed.
• The player will never start on a blocked field - you don't need to validate this.
• The grid array will always contain at least one element.
• Watch out for performance and note that you don't need to remember the paths the player took.

Good luck and happy coding!