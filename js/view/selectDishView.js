

var SelectDishView = function ( container , model) {

	/*--------------------------- Register the view as the observer of the model ---------------------------*/
	model.addObserver(this);

	/*--------------------------- update callback function will be called by the model ---------------------------*/
	this.update = function(obj) {
		if(obj == "updateGuest"){
			setGuests();
			addDishToMyDinner();
		} else if (obj == "updateDishesOfSelectedType") {
			setDishes(model.getAllDishes(model.getSelectedMenuType(), model.getSelectedFilter()));
		} else if (obj == "updateMyDinnerList")  {
			// Update the dinner table only
			addDishToMyDinner();
		}
	}

	/*--------------------------- method to show the selected menutype dishes ---------------------------*/

	// This method update the no of guests according to the user's choice
	var setGuests = function () {
		container.find("#select-dish-view-left-panel-guests").val(model.getNumberOfGuests());
	}

	var setDishes = function (dishesListModel){
		var pic ;																					// variable to hold the image path
		var dish;																				// variable to hold the name of the dish

		// $("#select-dish-view-bottom-right-panel").children().detach().remove();
		var dishesInMenu = container.find("#select-dish-view-bottom-right-panel");
		$(dishesInMenu).children().detach().remove();			// removing all children if there exists any
		for(key in dishesListModel){
			dish = dishesListModel[key];
			pic =  "images/" + dish.image;

			dishesInMenu.append( $("<div>").append($("<figure>").append($("<img>").attr("src",pic)
																																						.attr("alt","Picture not found")
																																						.attr("id",dish.id)
																																						.attr("class","model-dish"))
																													.append($("<hr>"))
																													.append($("<figcaption>").html(dish.name)
																																									 .attr("id",dish.id)
																																									 .attr("class","model-dish"))
																													.attr("id",dish.id)
																													.attr("class","model-dish")
																						)
																						.attr("id",dish.id)
																						.attr("class","model-dish")

				);
		}
	}

	var addDishToMyDinner = function () {
		var myMenus = model.getFullMenu();				// get my menu

		// var myDinnerTable = container.find("#select-dish-view-left-panel-my-dinner-table").empty();
		var myDinnerTable = container.find("#select-dish-view-left-panel-my-dinner-table"); // try to remove only row
		$(myDinnerTable).children().detach().remove();

		myDinnerTable.append( $("<tr>").append($("<th>").html("Dish Name"))
										.append($("<th>").html("Cost"))
		);
		for( key in myMenus) {
			myDinnerTable.append( $("<tr>").append($("<td>").html(myMenus[key].name))
											               .append($("<td>").html("SEK " + model.getSingleDishPrice(myMenus[key].id)))
																		 .attr("class","my-dinner-row")
			);
		}

		var myBill = container.find("#select-dish-view-total-cost");
		myBill.html("SEK " + model.getTotalMenuPrice());
	}

	/*--------------------------------- Populate the menu list (static) for search ----------------------------------*/

	var menus = ["Main Course","Starter","Dessert"];
	var values = ["main dish", "starter", "dessert"];


	var selectMenu = container.find("#search-by-menu");
	for(key in menus){
		selectMenu.append( $("<option>").attr("value",values[key])
							.html(menus[key])
		);
	}


	/*-------------------------- Fill in default no of guests : 1 -------------------------------------*/
	setGuests();
	/*-------------------------- Populating dishes based on selected menu (all-by default) -------------------------------------*/
	setDishes(model.getAllDishes("all"));

}
