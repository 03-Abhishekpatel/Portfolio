// Graphs Data Structures and Algorithms - JavaScript Implementations
// For interview revision: Graphs (Representations, Traversals, Algorithms)

class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }

  addEdge(v1, v2, weight = 1) {
    this.adjList[v1].push({ node: v2, weight });
    this.adjList[v2].push({ node: v1, weight }); // Undirected
  }

  addDirectedEdge(v1, v2, weight = 1) {
    this.adjList[v1].push({ node: v2, weight });
  }
}

// Depth-First Search (DFS)
function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);
  for (let neighbor of graph.adjList[start]) {
    if (!visited.has(neighbor.node)) dfs(graph, neighbor.node, visited);
  }
}

// Breadth-First Search (BFS)
function bfs(graph, start) {
  const queue = [start];
  const visited = new Set([start]);
  while (queue.length) {
    const vertex = queue.shift();
    console.log(vertex);
    for (let neighbor of graph.adjList[vertex]) {
      if (!visited.has(neighbor.node)) {
        visited.add(neighbor.node);
        queue.push(neighbor.node);
      }
    }
  }
}

// Shortest Path in Unweighted Graph (BFS)
function shortestPathUnweighted(graph, start, end) {
  const queue = [{ node: start, path: [start] }];
  const visited = new Set([start]);
  while (queue.length) {
    const { node, path } = queue.shift();
    if (node === end) return path;
    for (let neighbor of graph.adjList[node]) {
      if (!visited.has(neighbor.node)) {
        visited.add(neighbor.node);
        queue.push({ node: neighbor.node, path: [...path, neighbor.node] });
      }
    }
  }
  return null;
}

// Dijkstra's Algorithm (Shortest Path in Weighted Graph, non-negative weights)
function dijkstra(graph, start) {
  const distances = {};
  const pq = new PriorityQueue();
  for (let vertex in graph.adjList) {
    distances[vertex] = Infinity;
  }
  distances[start] = 0;
  pq.enqueue(start, 0);
  while (!pq.isEmpty()) {
    const { element: current, priority: currentDist } = pq.dequeue();
    if (currentDist > distances[current]) continue;
    for (let neighbor of graph.adjList[current]) {
      const distance = currentDist + neighbor.weight;
      if (distance < distances[neighbor.node]) {
        distances[neighbor.node] = distance;
        pq.enqueue(neighbor.node, distance);
      }
    }
  }
  return distances;
}

// Priority Queue for Dijkstra (Simple implementation)
class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(element, priority) {
    this.queue.push({ element, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }
  dequeue() {
    return this.queue.shift();
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}

// Detect Cycle in Undirected Graph (DFS)
function hasCycleUndirected(graph, start, visited = new Set(), parent = null) {
  visited.add(start);
  for (let neighbor of graph.adjList[start]) {
    if (!visited.has(neighbor.node)) {
      if (hasCycleUndirected(graph, neighbor.node, visited, start)) return true;
    } else if (neighbor.node !== parent) return true;
  }
  return false;
}

// Detect Cycle in Directed Graph (DFS)
function hasCycleDirected(graph) {
  const visited = new Set();
  const recStack = new Set();
  for (let vertex in graph.adjList) {
    if (hasCycleDirectedUtil(graph, vertex, visited, recStack)) return true;
  }
  return false;
}

function hasCycleDirectedUtil(graph, vertex, visited, recStack) {
  visited.add(vertex);
  recStack.add(vertex);
  for (let neighbor of graph.adjList[vertex]) {
    if (!visited.has(neighbor.node) && hasCycleDirectedUtil(graph, neighbor.node, visited, recStack)) return true;
    else if (recStack.has(neighbor.node)) return true;
  }
  recStack.delete(vertex);
  return false;
}

// Topological Sort (for DAG)
function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];
  for (let vertex in graph.adjList) {
    if (!visited.has(vertex)) topologicalSortUtil(graph, vertex, visited, stack);
  }
  return stack.reverse();
}

function topologicalSortUtil(graph, vertex, visited, stack) {
  visited.add(vertex);
  for (let neighbor of graph.adjList[vertex]) {
    if (!visited.has(neighbor.node)) topologicalSortUtil(graph, neighbor.node, visited, stack);
  }
  stack.push(vertex);
}

// Number of Connected Components
function connectedComponents(graph) {
  const visited = new Set();
  let count = 0;
  for (let vertex in graph.adjList) {
    if (!visited.has(vertex)) {
      dfs(graph, vertex, visited);
      count++;
    }
  }
  return count;
}

// Example Usage
// const g = new Graph();
// g.addVertex('A'); g.addVertex('B'); g.addVertex('C');
// g.addEdge('A', 'B'); g.addEdge('B', 'C');
// console.log(shortestPathUnweighted(g, 'A', 'C')); // ['A', 'B', 'C']

module.exports = {
  Graph,
  dfs,
  bfs,
  shortestPathUnweighted,
  dijkstra,
  hasCycleUndirected,
  hasCycleDirected,
  topologicalSort,
  connectedComponents
};
