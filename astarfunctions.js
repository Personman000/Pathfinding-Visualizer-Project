function aStar(start_node, end_node)
{
	var history = [];
	var visited = [start_node];
	start_node.local = 0;
	start_node.heuristic = distance(start_node, end_node);

	while(visited.length != 0)
	{
		// Get node with lowest heuristic
		visited.sort((a, b) => a.heuristic - b.heuristic);
		var curr_node = visited[0];
		if(curr_node === end_node)
		{
			history.push(curr_node);
			return history;
		}

		// Loop through all neighbors
		var curr_node_neighbors = curr_node.getNeighborNodes();
		for(var i = 0; i < curr_node_neighbors.length; i++)
		{
			curr_node_neighbor = curr_node_neighbors[i];

			// Only operate on neighbor node if it is not a wall
			if(curr_node_neighbor.cell.className != selected_class)
			{
				// If the distance to the neighbor node is better than its current one, update the parent of the neighbor node to the current node
				if(curr_node.local + 1 < curr_node_neighbor.local)
				{
					curr_node_neighbor.local = curr_node.local + 1;
					curr_node_neighbor.heuristic = curr_node_neighbor.local + distance(curr_node_neighbor, end_node);
					curr_node_neighbor.parent = curr_node;

					// If node hasn't been visited, add it to visited list
					if (!visited.includes(curr_node_neighbor))
					{
						visited.push(curr_node_neighbor);
					}
				}

			}
		}
		history.push(curr_node);
		//console.log(history.slice(0), visited.slice(0));
		visited.splice(0, 1);
	}
	return history;
}

function distance(from_node, to_node)
{
	return Math.abs(from_node.row - to_node.row) + Math.abs(from_node.column - to_node.column);
}