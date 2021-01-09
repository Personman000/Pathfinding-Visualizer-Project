window.onload = function()
{
	// Create table with num of cells according to window size
	var table_container = document.getElementById("table_container");
	var cell_size = 30;

	var container_height = table_container.clientHeight;
	var container_width = table_container.clientWidth;

	var num_rows = Math.floor(container_height/cell_size);
	var num_cols = Math.floor(container_width/cell_size);

	console.log("Cell size:", cell_size,
				"\nContainer height:", container_height,
				"\nContainer width:", container_width,
				"\nNum rows:", num_rows,
				"\nNum cols:", num_cols);

	createFullTable(table_container, num_rows, num_cols);

	// Initial start and end nodes
	document.getElementById("0 0").classList.add(start_class);
	document.getElementById(`${num_rows} ${num_cols}`).classList.add(end_class);

	// Initialize run button
	document.getElementById("run_button").addEventListener("click", run);
}

// DEBUG: Run a-star when spacebar is released
pathfind_history = [];
function run(e)
{
	// Start from scratch
	node_list = [];
	
	// Reset any colored nodes from previous paths
	for (var i = 0; i < pathfind_history.length; i++)
	{
		if(pathfind_history[i].cell.className == path_class || pathfind_history[i].cell.className == visited_class)
		{
			pathfind_history[i].cell.className = unselected_class;
		}
	}

	var start_cell = document.getElementsByClassName(start_class)[0];
	var end_cell = document.getElementsByClassName(end_class)[0];

	var start_node = createNodeFromElement(start_cell);
	var end_node = createNodeFromElement(end_cell);

	// Run pathfinding
	var pathfinding_function = document.getElementById("pathfinding_function").value;
	if(pathfinding_function == "aStar"){
		console.log("Running A-Star...");
		pathfind_history = aStar(start_node, end_node);
	}else if(pathfinding_function == "depthFirst"){
		console.log("Running Depth-First...");
		pathfind_history = depthFirst(start_node, end_node);
	}else if(pathfinding_function == "breadthFirst"){
		console.log("Running Breadth-First...");
		pathfind_history = breadthFirst(start_node, end_node);
	}
	
	// Color visited
	var speed = 5;
	for (var i = 0; i < pathfind_history.length; i++)
	{
		(function (i)
		{
			setTimeout(function ()
			{
				pathfind_history[i].cell.classList.remove(unselected_class);
				pathfind_history[i].cell.classList.add(visited_class);
			}, speed*i);
		})(i);
	}
	//console.log(pathfind_history);

	// Get found path
	var path = [];
	var curr_node = end_node;
	while(curr_node)	
	{
		path.push(curr_node);
		curr_node = curr_node.parent;
	}
	// Reverse to get from start-to-end rather than end-to-start
	path = path.reverse();
	// Color path nodes
	for (var j = 0; j < path.length; j++)
	{
		(function (j)
		{
			setTimeout(function ()
			{
				path[j].cell.classList.remove(visited_class);
				path[j].cell.classList.add(path_class);
			}, speed*j + speed*i);	// Make sure to color path nodes *after* visited nodes
		})(j);
	}
}