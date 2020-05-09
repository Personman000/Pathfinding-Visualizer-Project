function getNeighborByIndexJump(row, col, row_jump, col_jump)
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
	return getNeighborByIndexJump(node_vals[0], node_vals[1], 0, 1);	
}

function getLeftNode(node)
{
	var node_vals = getNodeVals(node);
	return getNeighborByIndexJump(node_vals[0], node_vals[1], 0, -1);	
}

function getUpNode(node)
{
	var node_vals = getNodeVals(node);
	return getNeighborByIndexJump(node_vals[0], node_vals[1], -1, 0);	
}

function getDownNode(node)
{
	var node_vals = getNodeVals(node);
	return getNeighborByIndexJump(node_vals[0], node_vals[1], 1, 0);	
}

function getNeighbors(node)
{
	var up_node = getUpNode(node);
	var right_node = getRightNode(node);
	var down_node = getDownNode(node);
	var left_node = getLeftNode(node);
	return [up_node, right_node, down_node, left_node];
}