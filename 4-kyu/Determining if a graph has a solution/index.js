/*
Implement a function solve_graph/solveGraph (or equivalent depending on your language) accepting 3 arguments in the given order:

start - The initial node of the directed graph
end - The destination node of the directed graph
arcs - A directed graph represented by a list/array/dictionary of directed edges
and returns a boolean value depending on whether the destination node can be reached from the initial node by traversing zero or more directed edges. That means that if the start and end nodes are identical then the end node is trivially considered to be reachable - return true/True in this case. Also, if the start and end nodes are distinct and either node does not appear in arcs then you should return false/False since there is no sequence of directed edges that you may traverse to reach the end node from the start node.

You may not assume any properties of the given directed graph (other than the fact that it is a directed graph) - for example, the given directed graph may contain multiple edges (in either direction) between two nodes or contain loops (directed edges starting and finishing on the same node).

You may also wish to take a look at adjacency lists.

Example:

var arcs = [
{ start : "a", end : "b"},
{ start : "a", end : "a"}
];

solve_graph("a", "b", arcs);
// Should return true, because "b" can be reached from "a"

solve_graph("a", "c", arcs);
// Should return false, because "c" can never be reached from "a", using any combination of arcs
*/

function solve_graph(start, end, arcs) {
  if (start === end) return true;

  const graph = {};
  for (const { start: from, end: to } of arcs) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  }

  if (!(start in graph)) return false;
  if (!(end in graph) && !arcs.some((arc) => arc.end === end)) return false;

  const visited = new Set();
  function dfs(node) {
    if (node === end) return true;
    if (!graph[node] || visited.has(node)) return false;

    visited.add(node);
    for (const neighbor of graph[node]) {
      if (dfs(neighbor)) return true;
    }
    return false;
  }

  return dfs(start);
}