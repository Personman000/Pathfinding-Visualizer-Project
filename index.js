window.onload = function()
{
	var table_container = document.getElementById("table_container");
	var cell_size = 20;

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