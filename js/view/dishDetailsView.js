var DishDetailsView = function ( container, model) {

	/*--------------------------------- Adding the selected no of guests ------------------------------*/
	var selectedNoOfPleopleSpan = $("span#dish-details-selected-people");
	selectedNoOfPleopleSpan.html(model.getNumberOfGuests());

	var selectedNoOfPleopleSelect = $("select#dish-details-selected-people");
	selectedNoOfPleopleSelect.append($("<option>").html(model.getNumberOfGuests()));

	/*-------------------------- Adding the selected dish with figure and info ----------------------------*/
	var sampleDish = model.getDish(1);
	var dishName = sampleDish.name;
	var dishFigPath = "images/" + sampleDish.image;
	var dishInfo = " Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
				   " Phasellus imperdiet, nulla et dictum interdum, nisi lorem" +
				   " egestas odio, vitae scelerisque enim ligula venenatis dolor." +
				   " Maecenas nisl est, ultrices nec congue eget, auctor vitae massa." +
				   " Fusce luctus vestibulum augue ut aliquet."

	// Adding the dish Name
	$("#dish-details-name").html(dishName);

	// Adding dish picture and info
	var figNInfo = $("#dish-details-fig-n-info"); 		// Getting the fig and info element from the html


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
	$("#dish-details-preparation-details").html(dishPreparation);

	/*-------- Adding the selected dish (sample) with figure and info and total price for dish for selected quest--------------------*/

	var ingredientsTable = $("#dish-details-ingredients-table");
	var ingredientPrice;
	var totalDishPrice  = 0.0;
	var ingredient;
	for (ing in sampleDish.ingredients) {
		ingredient = sampleDish.ingredients[ing];
		ingredientPrice = ingredient.price * model.getNumberOfGuests();

		totalDishPrice += ingredientPrice;
		ingredientsTable.append( $("<tr>").append( $("<td>").html(ingredient.quantity + " "+ ingredient.unit).css("text-align","left"))
							  .append( $("<td>").html(ingredient.name).css("text-align","left"))
							  .append( $("<td>").html("SEK"+" "+ingredientPrice))
					);
	}


	$("#add-n-price-total-price").html("SEK " + totalDishPrice);


	/*-------------------- Diplaying total price and ingredients for all dishes in my menus for selected no. of guests --------------------*/
	// var myIngredients = model.getAllIngredients();
	// var ingredientsTable = $("#dish-details-ingredients-table");
	// var ingredientPrice;
	// var ingredient;
	// for (index in myIngredients) {
	// 	for (ing in myIngredients[index]) {
	// 		ingredient = myIngredients[index][ing];
	// 		ingredientPrice = ingredient.price * model.getNumberOfGuests();
	// 		ingredientsTable.append( $("<tr>").append( $("<td>").html(ingredient.quantity + " "+ ingredient.unit).css("text-align","left"))
	// 							  .append( $("<td>").html(ingredient.name).css("text-align","left"))
	// 							  .append( $("<td>").html("SEK"+" "+ingredientPrice))
	// 					);
	// 	}
	// }

	// $("#add-n-price-total-price").html("SEK " + model.getTotalMenuPrice());

}