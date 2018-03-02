var DishDetailsViewController = function (container, model, app) {

	/*-------------------------------- Going back to select dish view ------------------------------------*/
	container.find("#dish-details-view-back-to-search").click(function(event) {
		app.generalController(app.getSelectDishScreen());
	});

	container.find("#dish-details-view-add-n-price-add").click( function () {
		model.addSelectedDish();

		var myMenus = model.getFullMenu();
		app.generalController(app.getSelectDishScreen());
	});

}
