function aStar(start_node, end_node)
{
	var visited = [start_node];
	start_node.local = 0;
	start_node.heuristic = distance(start_node, end_node);

	while(visited.length != 0)
	{
		// Get node with lowest heuristic
		node_list.sort((a, b) => a.local - b.local);
		var curr_node = visited[0];

		if(curr_node === end_node)
		{
			return;
		}

		// Loop through all neighbors
		var curr_node_neighbors = curr_node.getNeighborNodes();
		for(var i = 0; i < curr_node_neighbors.length; i++)
		{
			curr_node_neighbor = curr_node_neighbors[i];

			// Only operate on neighbor node if it is not null (from overflow positions)
			if(curr_node_neighbor && curr_node_neighbor.cell.className != "wall")
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
		visited.splice(0, 1);
	}
}

function distance(from_node, to_node)
{
	return Math.sqrt(Math.pow(to_node.row - from_node.row, 2) + Math.pow(to_node.column - from_node.column, 2));
}