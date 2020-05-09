function aStar(start_node, end_node)
{
	var open_list = [start_node];
	start_node.weight = 0;
	start_node.heuristic = distance(start_node, end_node);

	while(open_list.length != 0)
	{
		// Get node with lowest heuristic
		node_list.sort((a, b) => a.weight - b.weight);
		var curr_node = open_list[0];

		// Loop through all neighbors
		var curr_node_neighbors = curr_node.getNeighborNodes();
		for(var i = 0; i < curr_node_neighbors.length; i++)
		{
			curr_node_neighbor = curr_node_neighbors[i];
			
			// Only operate on neighbor node if it is not null (from overflow positions)
			if(curr_node_neighbor)
			{
				
			}
		}
		open_list.splice(0, 1);
		console.log(open_list);
	}
}

function distance(from_node, to_node)
{
	return Math.sqrt(Math.pow(to_node.row - from_node.row, 2) + Math.pow(to_node.column - from_node.column, 2));
}