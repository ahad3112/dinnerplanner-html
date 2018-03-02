$(function() {

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

	//We instantiate our model
	var model = new DinnerModel();


	/*------------------- Set no. of guest in the model to use in the later view ------------------------*/
	// var noOfGuests = 120;					// Selecting no of guests
	// model.setNumberOfGuests(noOfGuests);	// setting it to the model

	/*------------------- adding a dish to the dinner menu to use int the later view ------------------------*/
	// model.addDishToMenu(100);
	// model.addDishToMenu(101);
	// model.addDishToMenu(202);

	// It might be useful to have view variable before-hand
	var welcomeScreen = $("#welcome-view");
	var selectDishScreen = $("#select-dish-view");
	var selectDishLeftScreen = $("#select-dish-view-left-panel");
	var selectDishRightScreen = $("#select-dish-view-right-panel");
	var dishDetailsRightScreen = $("#dish-details-view-right-panel");
	var dinnerOverviewScreen = $("#dinner-overview-view");
	var dinnerPrintoutScreen = $("#dinner-printout-view");


	// Adding views
	var welcomeView = new WelcomeView (welcomeScreen, model);
	var selectDishView = new SelectDishView (selectDishScreen, model);
	var dishDetailsView = new DishDetailsView (dishDetailsRightScreen, model);
	var dinnerOverviewView = new DinnerOverviewView (dinnerOverviewScreen, model);
	var dinnerPrintoutView = new DinnerPrintoutView (dinnerPrintoutScreen, model);

	// Adding controllers
	var welcomeViewController = new WelcomeViewController (welcomeScreen, model, this);
	var selectDishViewController = new SelectDishViewController (selectDishScreen, model, this);
	var dishDetailsViewController = new DishDetailsViewController (dishDetailsRightScreen, model, this);
	var dinnerOverviewViewController = new DinnerOverviewViewController (dinnerOverviewScreen, model, this);
	var dinnerPrintoutViewController = new DinnerPrintoutViewController (dinnerPrintoutScreen, model, this);

	// Adding general controller
	this.generalController = function (currentView) {
		hideAll();

		if(currentView == selectDishScreen){
			selectDishScreen.show();
			selectDishLeftScreen.show();
			selectDishRightScreen.show();
		}else if(currentView == dishDetailsRightScreen){
			selectDishScreen.show();
			selectDishLeftScreen.show();
			dishDetailsRightScreen.show();
		} else {
			currentView.show();
		}
	}

	var hideAll = function () {
		welcomeScreen.hide();
		selectDishScreen.hide();
		selectDishLeftScreen.hide();
		selectDishRightScreen.hide();
		dishDetailsRightScreen.hide();
		dinnerOverviewScreen.hide();
		dinnerPrintoutScreen.hide();
	}

	// getter methods for screen
	this.getWelcomeScreen = function() {
		return welcomeScreen;
	}

	this.getSelectDishScreen = function() {
		return selectDishScreen;
	}

	this.getSelectDishLeftScreen = function() {
		return selectDishLeftScreen;
	}

	this.getSelectDishRightScreen = function() {
		return selectDishRightScreen;
	}

	this.getDishDetailsRightScreen = function() {
		return dishDetailsRightScreen;
	}

	this.getDinnerOverviewScreen = function() {
		return dinnerOverviewScreen;
	}

	this.getDinnerPrintoutScreen = function() {
		return dinnerPrintoutScreen;
	}

	// Adding a event controller for whole document, hitting space bar will return to the homescreen
	$(document).keypress(function(e) {
		if (e.which == 32 && !$(':focus').length) {
				this.generalController(welcomeScreen);
		}
	});

	// Initial view is welcome views
	this.generalController(welcomeScreen);
});
