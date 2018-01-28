

var SelectDishView = function ( container , model) {


	/*-------------------------------- Populate the no of guest selection ---------------------------------*/
	var noOfPeople = $("select#selectNoOfPeople");
	var i;
	var max = 10;
	for(i = 0; i <= max; i++){
		noOfPeople.append( $("<option>")
    					.html(i)
		);
	}


	/*------------------- Set no. of guest in the model to use in the later view ------------------------*/
	var noOfGuests = 10;						// Selecting no of guests
	model.setNumberOfGuests(noOfGuests);	// setting it to the model

	/*------------------- adding a dish to the dinner menu to use int the later view ------------------------*/
	model.addDishToMenu(100);
	model.addDishToMenu(101);
	model.addDishToMenu(202);

	/*---------------------------- remove a dish from the dinner menu (Checking) --------------------------------------*/
	// model.removeDishFromMenu(2);


	/*------------------------------ My Dinner list in a table --------------------------------------------*/
	// var myDishesList = $("table#dishes-table");
	// myDishesList.append($('<tr><th>' + "Dish Name" + '</th>' + 
	// 					'<th>' + "Cost" + '</th></tr>')
	// );

	// myDishesList.append($('<tr><td>' + "Dish" + '</td>' + 
	// 					'<td>' + "Cost" + '</td></tr>')
	// );

	/*--------------------------------- Populate the menu list for search ----------------------------------*/
	var menuList = $("select#searchByMenu");

	var menus = ["All","Main Course","Side Dish","Dessert","Appetizer","---"];
	for(key in menus){
		menuList.append( $("<option>")
    					.html(menus[key])
		);
	}


	/*-------------------------- Populating dishes based on selected menu (all-by default) -------------------------------------*/
	var dishesList = $("#bottom-right-panel"); 				// getting the html element for dishes list for the selected menu
	// var dishesListModel = model.getFullMenu();			// getting the dishes in the database
	var dishesListModel = model.getAllDishes('main dish');	// getting the dishes of specific type
	var pic ;												// variable to hold the image path
	var dishName;											// variable to hold the name of the dish
	for(key in dishesListModel){
		pic =  "images/" + dishesListModel[key].image;
		dishName = dishesListModel[key].name;

		dishesList.append( $("<div>").append($("<figure>").append($("<img>").attr("src",pic).attr("alt","Picture not found"))
														  .append($("<hr>"))
														  .append($("<figcaption>").html(dishName))
									)
			);

	}
}