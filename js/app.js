$(function() {
	//We instantiate our model
	var model = new DinnerModel();


	/*------------------- Set no. of guest in the model to use in the later view ------------------------*/
	var noOfGuests = 120;					// Selecting no of guests
	model.setNumberOfGuests(noOfGuests);	// setting it to the model

	/*------------------- adding a dish to the dinner menu to use int the later view ------------------------*/
	// model.addDishToMenu(100);
	// model.addDishToMenu(101);
	// model.addDishToMenu(202);

	// Create an instance of welcome view
	var welcomeView = new WelcomeView ($("#layout-body"), model);


	// adding welcome view controller
	var welcomeViewController = new WelcomeViewController ($("#layout-body"), model);


	// create an instance of select dish view
	var  selectDishView = new SelectDishView ($("#layout-body"), model);

	// adding select dish view controller
	var selectDishViewController = new SelectDishViewController ($("#layout-body"), model);

	// create an instance of select dish again view
	// var  selectDishAgainView = new SelectDishAgainView ($("#select-dish-again-container"), model);


	// Create an instance of dish details view
	var dishDetailsView = new DishDetailsView ($("#layout-body"), model);


	// adding select dinner overview view controller
	var dishDetailsViewController = new DishDetailsViewController ($("#layout-body"), model);

	// Create an instance of dinner overview view
	var dinnerOverviewView = new DinnerOverviewView ($("#layout-body"), model);


	// adding select dinner overview view controller
	var dinnerOverviewViewController = new DinnerOverviewViewController ($("#layout-body"), model);

		// Create an instance of dinner overview view
	var dinnerPrintoutView = new DinnerPrintoutView ($("#layout-body"), model);


	// adding dinner printout view controller
	var dinnerPrintoutViewController = new DinnerPrintoutViewController ($("#layout-body"), model);

	// And create the instance of ExampleView
	// var exampleView = new ExampleView($("#exampleView"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children
	 * of the specific view you're working with (see exampleView.js).
	 */

});
