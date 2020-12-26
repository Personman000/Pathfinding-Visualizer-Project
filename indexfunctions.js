unselected_class = "empty";
selected_class = "wall";
start_class = "start";
end_class = "end";
path_class = "path";
visited_class = "visited";

mouse_down = false;
document.onmousedown = function(){mouse_down = true}
document.onmouseup = function(){mouse_down = false; start_drag = false; end_drag = false}
start_drag = false;
end_drag = false;

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
			var cell = row.insertCell(0);													// insert cell
			cell.id = i + " " + j;															// number row and col num for cells

			cell.classList.add(unselected_class);											// instantiate cell as empty

			cell.onmousedown = function()
			{
				if(!this.classList.contains("start") && !this.classList.contains("end")){	// Swap state of normal node
					swapSelectedNode(this)
				}else if(this.classList.contains("start")){									// Initialize dragging of start node
					start_drag = true;
				}else if(this.classList.contains("end")){									// Initialize dragging of end node
					end_drag = true;
				}
			}
			cell.onmouseover = function()
			{
				if(mouse_down == true)														// On mouse drag over
				{
					if(start_drag == false && end_drag == false){							// Change state of normal node
						if(!this.classList.contains("start") && !this.classList.contains("end")){
							swapSelectedNode(this);
						}
					}else if(start_drag == true){											// Drag start node to cursor node
						this.classList.add("start");
					}else if(end_drag == true){												// Drag end node to cursor node
						this.classList.add("end");
					}
				}
			}
			cell.onmouseout = function()
			{
				if(start_drag == true){														// On mouse drag off, remove start state from the node
					this.classList.remove("start");
				}else if(end_drag == true){													// On mouse drag off, remove end state from the node
					this.classList.remove("end");
				}
			}
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