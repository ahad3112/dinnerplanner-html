

var SelectDishView = function ( container , model) {

	/*--------------------------- Register the view as the observer of the model ---------------------------*/
	model.addObserver(this);

	/*--------------------------- update callback function will be called by the model ---------------------------*/
	this.update = function() {
		setUpdate(model.getAllDishes(model.getSelectedMenuType(), model.getSelectedFilter()));
	}

	/*--------------------------- method to show the selected menutype dishes ---------------------------*/

	var setUpdate = function (dishesListModel){
		var pic ;																					// variable to hold the image path
		var dishName;																				// variable to hold the name of the dish

		var dishesInMenu = container.find("#select-dish-view-bottom-right-panel").empty();			// empty the select element if there exists any options
		for(key in dishesListModel){
			pic =  "images/" + dishesListModel[key].image;
			dishName = dishesListModel[key].name;

			dishesInMenu.append( $("<div>").append($("<figure>").append($("<img>").attr("src",pic).attr("alt","Picture not found").attr("id",key))
																.append($("<hr>"))
																.append($("<figcaption>").append($("<a>").	html(dishName)))
										)
				);

			// dishesInMenu.append( $("<div>").append($("<figure>").append($("<img>").attr("src",pic).attr("alt","Picture not found").attr("id",key))
			// 												  .append($("<hr>"))
			// 													// .append($("<figcaption>").append($("<a>").append($("<span>").html(dishName))))
			// 													.append($("<figcaption>").append($("<a>").html(dishName)))
			// 							)
			// 	);

		}

		/*------------------------------------------- Left Panel -------------------------------------------*/
		/*--------------------------------- Adding a row in the table of my dinner --------------------------------*/
		/*--------------------------------- Get a specific dish using ID ----------------------------------*/

		var myMenus = model.getFullMenu();				// get my menu

		var myDinnerTable = container.find("#select-dish-view-left-panel-my-dinner-table").empty();

		myDinnerTable.append( $("<tr>").append($("<th>").html("Dish Name"))
										.append($("<th>").html("Cost"))
		);
		for( key in myMenus) {
			myDinnerTable.append( $("<tr>").append($("<td>").html(myMenus[key].name))
											.append($("<td>").html("SEK " + model.getSingleDishPrice(myMenus[key].id)))
			);
		}

		var myBill = container.find("#select-dish-view-total-cost");
		myBill.html("SEK " + model.getTotalMenuPrice());

	}

	/*--------------------------------- Populate the menu list for search ----------------------------------*/

	var menus = ["Main Course","Starter","Dessert"];
	var values = ["main dish", "starter", "dessert"];


	var selectMenu = container.find("#search-by-menu");
	for(key in menus){
		selectMenu.append( $("<option>").attr("value",values[key])
							.html(menus[key])
		);
	}


	/*---------------- This view contains dish details view left panel. Needs to be hiden -----------------*/
	var dishDetailsViewRightPanel = container.find("#dish-details-view-right-panel");
	dishDetailsViewRightPanel.hide();


	/*-------------------------- Populating dishes based on selected menu (all-by default) -------------------------------------*/
	setUpdate(model.getAllDishes("all"));

}
