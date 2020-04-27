function createFullTable(parent, num_rows, num_cols)
{
	// Put table in div and insert
	table = document.createElement('table');
	parent.appendChild(table);
	
	// Add rows and cols
	for (var i = num_rows; i >= 0; i--)
		{
		var row = table.insertRow(0);
		row.id = "row " + i;

		for (var j = num_cols; j >= 0; j--)
		{
			var cell = row.insertCell(0);
			cell.id = i + " " + j;
		}
	}
}