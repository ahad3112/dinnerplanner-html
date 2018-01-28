

var SelectDishAgainView = function ( container , model) {

	/*--------------------------------- Adding the selected no of guests ------------------------------*/
	var selectedNoOfPleople = $("#selected-no-of-people");
	selectedNoOfPleople.append($("<option>").html(model.getNumberOfGuests()));

	/*--------------------------------- Get a specific dish using ID ----------------------------------*/

	var myMenus = model.getFullMenu();				// get my menu
	var myDishesList = $("table#selected-dish");	// get my dishes element from the html to add the selected dish


	for( key in myMenus) {
		// myDishesList.append($('<tr><td>' + myMenus[key].name + '</td>' + 
		// 				'<td>' + "Cost" + '</td></tr>')
		// );
		myDishesList.append( $("<tr>").append($("<td>").html(myMenus[key].name))
									  .append($("<td>").html(model.getSingleDishPrice(myMenus[key].id)))
		);
	}

	/*--------------------------------- Updatign total cost of my menu ---------------------------------*/
	var totalMenuCost = $("#total-menu-cost");
	totalMenuCost.html(model.getTotalMenuPrice());

}