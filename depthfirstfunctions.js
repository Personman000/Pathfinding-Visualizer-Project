function depthFirst(start_node, end_node){
	return depthFirstHelper(start_node, end_node, []);
}

function depthFirstHelper(start_node, end_node, history)
{
	history.push(start_node);
	var curr_node = start_node;

	// Loop through all neighbors
	var curr_node_neighbors = curr_node.getNeighborNodes();
	for(var i = 0; i < curr_node_neighbors.length; i++)
	{
		var curr_node_neighbor = curr_node_neighbors[i];

		// Only operate on neighbor node if it is exists, it is not a wall, if it is unvisited, and if the end node has not yet been found
		if(curr_node_neighbor.cell.className != selected_class && !history.includes(curr_node_neighbor) && !history.includes(end_node))
		{
			// Add node to visited nodes
			history.push(curr_node_neighbor);

			// Set path
			curr_node_neighbor.parent = curr_node;

			// Recurse
			history.concat(depthFirstHelper(curr_node_neighbor, end_node, history));
		}
	}

	return history;
}