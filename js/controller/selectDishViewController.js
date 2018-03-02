var SelectDishViewController = function (container, model, app) {


	model.addObserver(this);

	this.update = function () {
		setDishController();
	}

	// This need to be call after every events as model-dish are deleted and added frequently
	var setDishController = function () {
		// Moving from select dish view to dish details after clicking on a dish
		container.find("#select-dish-view-bottom-right-panel  div").click( function (event) {
			// var dishId = $("#select-dish-view-bottom-right-panel > div").attr("id");
			var dishId = $(event.target).attr("id");
			// console.log(dishId);
			model.showSelectedDishDetails(dishId);
			app.generalController(app.getDishDetailsRightScreen());
		});
	}


	// Adding controller for no of guests update
	container.find("#select-dish-view-left-panel-guests").change (function(event){
		var noOfGuest = event.target.value;
		model.setNumberOfGuests(noOfGuest);
	});

	container.find("#search-by-menu").change( function (event) {
		// Get the selected menu type
		var menuType = event.target.value;
		model.updateSelectedMenuType(menuType);
	});

	container.find("#search-by-keyWords").keypress( function (event) {
		// Get the selected menu type
		var filter = event.target.value;
		model.updateSelectedFilter(filter);
	});

	container.find("#select-dish-view-search").click ( function (event) {
		model.displayUserDefinedDishes();
	});

	// Go to dinner overview view after clicking confirm dinner button
	container.find("#select-dish-view-confirm-dinner").click ( function (){

		// viewing the overview screen
		app.generalController(app.getDinnerOverviewScreen());
	});

	// First time call
	setDishController();
}
