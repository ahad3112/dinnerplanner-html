var DishDetailsView = function ( container, model) {

	/*--------------------------- Register the view as the observer of the model ---------------------------*/
	model.addObserver(this);


	/*--------------------------- update callback function will be called by the model ---------------------------*/
	this.update = function() {
		var selectedDishForDetails = model.getDishUsingName(model.getSelectedDishForDetails());
		if(selectedDishForDetails != null){
			setUpdate(selectedDishForDetails);
		}
	}

	/*--------------------------------- Adding the selected no of guests ------------------------------*/
	var noOfGuest = container.find("#select-dish-view-left-panel-guest-no");
	noOfGuest.append($("<option>").html(model.getNumberOfGuests()));

	var selectedNoOfPleopleSpan = container.find("span#dish-details-view-selected-people");
	selectedNoOfPleopleSpan.html(model.getNumberOfGuests());

	/*--------------- This method show the details of the selected dish for the defined guest --------------------*/

	var dishInfo = " Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
					 " Phasellus imperdiet, nulla et dictum interdum, nisi lorem" +
					 " egestas odio, vitae scelerisque enim ligula venenatis dolor." +
					 " Maecenas nisl est, ultrices nec congue eget, auctor vitae massa." +
					 " Fusce luctus vestibulum augue ut aliquet."

	var setUpdate = function (selectedDishForDetails){
		var dishName = selectedDishForDetails.name;
		var dishFigPath = "images/" + selectedDishForDetails.image;

		// Adding the dish Name
		container.find("#dish-details-view-dish-name").empty().html(dishName);

		// Adding dish picture and info
		var figNInfo = container.find("#dish-details-view-fig-n-info").empty(); 		// Getting the fig and info element from the html

		// The height of the figure should be function of some parameter of window height
		var figWidth = figNInfo.width() / 2 + "px";  // This is for checking : working

		figNInfo.append($("<figure>").append($("<img>").attr("src",dishFigPath)
														 .attr("alt","Picture not found")
														 .css({"width":"100%"})
											)
									 .append($("<figcaption>").html(dishInfo)
																.css("text-align","justify")
												)
		);

		/*----------------------------- Adding the selected dish preparation details  ------------------------------------*/
		var dishPreparation = " Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
						 " Phasellus imperdiet, nulla et dictum interdum, nisi lorem" +
						 " egestas odio, vitae scelerisque enim ligula venenatis dolor." +
						 " Maecenas nisl est, ultrices nec congue eget, auctor vitae massa." +
						 " Fusce luctus vestibulum augue ut aliquet." +
						 " Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
						 " Phasellus imperdiet, nulla et dictum interdum, nisi lorem" +
						 " egestas odio, vitae scelerisque enim ligula venenatis dolor." +
						 " Maecenas nisl est, ultrices nec congue eget, auctor vitae massa." +
						 " Fusce luctus vestibulum augue ut aliquet."
		container.find("#dish-details-view-preparation-details").empty().html(dishPreparation).css("text-align","justify");

		/*-------- Adding the selected dish (sample) with figure and info and total price for dish for selected quest--------------------*/

		var ingredientsTable = container.find("#dish-details-view-ingredients-table").empty();
		var ingredientPrice;
		var totalDishPrice  = 0.0;
		var ingredient;
		for (ing in selectedDishForDetails.ingredients) {
			ingredient = selectedDishForDetails.ingredients[ing];
			ingredientPrice = ingredient.price * model.getNumberOfGuests();

			totalDishPrice += ingredientPrice;
			ingredientsTable.append( $("<tr>").append( $("<td>").html(ingredient.quantity + " "+ ingredient.unit).css("text-align","left"))
									.append( $("<td>").html(ingredient.name).css("text-align","left"))
									.append( $("<td>").html("SEK"+" "+ingredientPrice))
						);
		}


		container.find("#dish-details-view-add-n-price-total-price").empty().html("SEK " + totalDishPrice);

	}

	// /*-------------------------- Adding the selected dish with figure and info ----------------------------*/
	// var sampleDish = model.getDish(1);
	// var dishName = sampleDish.name;
	// var dishFigPath = "images/" + sampleDish.image;
	// var dishInfo = " Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
	// 			   " Phasellus imperdiet, nulla et dictum interdum, nisi lorem" +
	// 			   " egestas odio, vitae scelerisque enim ligula venenatis dolor." +
	// 			   " Maecenas nisl est, ultrices nec congue eget, auctor vitae massa." +
	// 			   " Fusce luctus vestibulum augue ut aliquet."
  //
	// // Adding the dish Name
	// container.find("#dish-details-view-dish-name").html(dishName);
  //
	// // Adding dish picture and info
	// var figNInfo = container.find("#dish-details-view-fig-n-info"); 		// Getting the fig and info element from the html
  //
  //
	// // The height of the figure should be function of some parameter of window height
	// var figWidth = figNInfo.width() / 2 + "px";  // This is for checking : working
  //
	// figNInfo.append($("<figure>").append($("<img>").attr("src",dishFigPath)
	// 											   .attr("alt","Picture not found")
	// 											   .css({"width":"100%"})
	// 									)
	// 							 .append($("<figcaption>").html(dishInfo)
	// 							 						  .css("text-align","justify")
	// 							 	    )
	// );
  //
	// /*----------------------------- Adding the selected dish preparation details  ------------------------------------*/
	// var dishPreparation = " Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
	// 			   " Phasellus imperdiet, nulla et dictum interdum, nisi lorem" +
	// 			   " egestas odio, vitae scelerisque enim ligula venenatis dolor." +
	// 			   " Maecenas nisl est, ultrices nec congue eget, auctor vitae massa." +
	// 			   " Fusce luctus vestibulum augue ut aliquet." +
	// 			   " Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
	// 			   " Phasellus imperdiet, nulla et dictum interdum, nisi lorem" +
	// 			   " egestas odio, vitae scelerisque enim ligula venenatis dolor." +
	// 			   " Maecenas nisl est, ultrices nec congue eget, auctor vitae massa." +
	// 			   " Fusce luctus vestibulum augue ut aliquet."
	// container.find("#dish-details-view-preparation-details").html(dishPreparation).css("text-align","justify");
  //
	// /*-------- Adding the selected dish (sample) with figure and info and total price for dish for selected quest--------------------*/
  //
	// var ingredientsTable = container.find("#dish-details-view-ingredients-table");
	// var ingredientPrice;
	// var totalDishPrice  = 0.0;
	// var ingredient;
	// for (ing in sampleDish.ingredients) {
	// 	ingredient = sampleDish.ingredients[ing];
	// 	ingredientPrice = ingredient.price * model.getNumberOfGuests();
  //
	// 	totalDishPrice += ingredientPrice;
	// 	ingredientsTable.append( $("<tr>").append( $("<td>").html(ingredient.quantity + " "+ ingredient.unit).css("text-align","left"))
	// 						  .append( $("<td>").html(ingredient.name).css("text-align","left"))
	// 						  .append( $("<td>").html("SEK"+" "+ingredientPrice))
	// 				);
	// }
  //
  //
	// container.find("#dish-details-view-add-n-price-total-price").html("SEK " + totalDishPrice);

}
