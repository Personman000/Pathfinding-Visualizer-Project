function getNeighbor(row, col, row_jump, col_jump)
{
	return document.getElementById((row + row_jump) + " " + (col + col_jump));
}

function getNodeVals(node)
{
	var node_vals = node.id.split(" ");
	var node_row = parseInt(node_vals[0]);
	var node_col = parseInt(node_vals[1])
	return [node_row, node_col];
}

function getRightNode(node)
{
	var node_vals = getNodeVals(node);
	return getNeighbor(node_vals[0], node_vals[1], 0, 1);	
}

function getLeftNode(node)
{
	var node_vals = getNodeVals(node);
	return getNeighbor(node_vals[0], node_vals[1], 0, -1);	
}

function getUpNode(node)
{
	var node_vals = getNodeVals(node);
	return getNeighbor(node_vals[0], node_vals[1], 1, 0);	
}

function getDownNode(node)
{
	var node_vals = getNodeVals(node);
	return getNeighbor(node_vals[0], node_vals[1], -1, 0);	
}