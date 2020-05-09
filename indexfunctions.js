unselected_class = "empty";
selected_class = "wall";
path_class = "path";
visited_class = "visited";

mouse_down = false;
document.onmousedown = function(){mouse_down = true}
document.onmouseup = function(){mouse_down = false}

function createFullTable(parent, num_rows, num_cols)
{
	// Put table in div and insert
	table = document.createElement('table');
	parent.appendChild(table);
	
	// Add rows
	for (var i = num_rows; i >= 0; i--)
	{

		var row = table.insertRow(0);
		row.id = "row " + i;

		// Add cols (by adding cells)
		for (var j = num_cols; j >= 0; j--)
		{
			var cell = row.insertCell(0);					// insert cell
			cell.id = i + " " + j;							// number row and col num for cells

			cell.classList.add(unselected_class);			// instantiate cell as empty

			cell.onmousedown = function(){					// Change state on mouse click
				swapSelectedNode(this)
			};
			cell.onmouseover = function()					// Change state on mouse hover AND mouse drag
			{
				if(mouse_down == true)						// Change color on mouse drag
				{
					swapSelectedNode(this);
				}
			};
		}
	}
}

// Swap to opposing selected or unselected class
function swapSelectedNode(cell)
{
	if(cell.classList.contains(selected_class)){
		cell.className = unselected_class;
	}else{
		cell.classList.remove(unselected_class)
		cell.className = selected_class;
	}
}