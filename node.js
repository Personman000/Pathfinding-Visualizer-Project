function createNode(row_num, col_num)
{
	var cell_element = document.getElementById(row_num + " " + col_num);
	var node = {
		row: row_num,
		column: col_num,
		cell: cell_element,
		state: cell_element.className,
		parent: null
	};
	return node;
}