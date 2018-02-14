var DishDetailsViewController = function (container, model) {

	/*-------------------------------- Going back to select dish view ------------------------------------*/
	container.find("#dish-details-view-back-to-search").click(function(event) {
		container.find("#dish-details-view-right-panel").hide();					// hide the dish-details-view-right-panel
		container.find("#select-dish-view-right-panel").show(); 			// display the select-dish-view-right-panel
	});

	container.find("#dish-details-view-add-n-price-add").click( function () {

		// var target = $(event.target);
		model.addSelectedDish();

		container.find("#dish-details-view-right-panel").hide(); 					// hiding the select-dish-view-right-panel
		container.find("#select-dish-view-right-panel").show();
	});

}
