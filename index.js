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
}

// DEBUG: Run a-star when spacebar is released
a_star_history = [];
window.onkeyup = function(e)
{
	if(e.keyCode == 32)
	{
		// Start from scratch
		node_list = [];
		
		// Reset any colored nodes from previous paths
		console.log(a_star_history);
		for (var i = 0; i < a_star_history.length; i++)
		{
			if(a_star_history[i].cell.className == path_class || a_star_history[i].cell.className == visited_class)
			{
				a_star_history[i].cell.className = unselected_class;
			}
		}

		// DEBUG: Hardcode start and end nodes
		var test_start_node = createNodeFromPosition(2, 2);
		var test_end_node = createNodeFromPosition(20, 20);

		// Run a-star
		a_star_history = aStar(test_start_node, test_end_node);
		
		// Color visited
		var speed = 5;
		for (var i = 0; i < a_star_history.length; i++)
		{
			(function (i)
			{
				setTimeout(function ()
				{
					a_star_history[i].cell.className = visited_class;
				}, speed*i);
			})(i);
		}

		// Get found path
		var path = [];
		var curr_node = test_end_node;
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
					path[j].cell.className = path_class;
				}, speed*j + speed*i);	// Make sure to color path nodes *after* visited nodes
			})(j);
		}
	}
}