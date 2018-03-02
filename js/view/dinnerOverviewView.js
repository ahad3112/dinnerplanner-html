
var DinnerOverviewView = function ( container, model) {

	// Adding observer to the model
	model.addObserver(this);


	/*--------------------------- update callback function will be called by the model ---------------------------*/
	this.update = function(obj) {
		setGuests();
		setDinnerOverView();
	}

	/*--------------------------------- Adding the selected no of guests ------------------------------*/

	var setGuests = function () {
		container.find("#dinner-overview-view-selected-people").html(model.getNumberOfGuests());
	}

	/*--------------------------------- Populate my selected dishes with price -------------------------*/
	var setDinnerOverView = function() {
		var myDinnerOverView = container.find("#dinner-overview-view-my-menu-info");
		$(myDinnerOverView).children().detach().remove();
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
		var totalPrice = container.find("#dinner-overview-view-my-price");
		totalPrice.html(model.getTotalMenuPrice() + " SEK");
	}


	// Initialize the view... don't need to initialize ...
	// setGuests();
	// setDinnerOverView();
}
