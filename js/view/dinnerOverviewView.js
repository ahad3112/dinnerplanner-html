
var DinnerOverviewView = function ( container, model) {
	/*--------------------------------- Adding the selected no of guests ------------------------------*/
	var selectedNoOfPleople = $("#dinner-overview-selected-people");
	selectedNoOfPleople.html(model.getNumberOfGuests());

	/*--------------------------------- Populate my selected dishes with price -------------------------*/
	var myDinnerOverView = $("#dinner-overview-my-menu-info");
	var myMenus = model.getFullMenu();
	var pic ;												// variable to hold the image path
	var dishName;											// variable to hold the name of the dish
	for(key in myMenus){
		pic =  "images/" + myMenus[key].image;
		dishName = myMenus[key].name;

		myDinnerOverView.append( $("<div>").append($("<figure>").append($("<img>").attr("src",pic).attr("alt","Picture not found"))
														  .append($("<hr>"))
														  .append($("<figcaption>").html(dishName))
														  .append($("<figcaption>").html(model.getSingleDishPrice(myMenus[key].id) + " SEK")
														  						   .css("float","right")
														  	     )
									              )
			);

	}


	/*---------------------------------------- Adding the total price  --------------------------------*/
	var totalPrice = $("#dinner-overview-my-price");
	totalPrice.html(model.getTotalMenuPrice() + " SEK");

}