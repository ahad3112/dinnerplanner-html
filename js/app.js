$(function() {
	//We instantiate our model
	var model = new DinnerModel();


	// create an instance of select dish view  
	var  selectDishView = new SelectDishView ($("#select-dish-container"), model);

	// create an instance of select dish again view  
	var  selectDishAgainView = new SelectDishAgainView ($("#select-dish-again-container"), model);


	// Create an instance of dish details view
	var dishDetailsView = new DishDetailsView ($("#dish-details-container"), model);

	// Create an instance of dinner overview view
	var dinnerOverviewView = new DinnerOverviewView ($("#dinner-overview-container"), model);

		// Create an instance of dinner overview view
	var dinnerPrintoutView = new DinnerPrintoutView ($("#dinner-printout-container"), model);
	
	// And create the instance of ExampleView
	var exampleView = new ExampleView($("#exampleView"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});