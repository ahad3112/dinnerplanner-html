var DinnerOverviewViewController = function (container, model, app) {
	// Moving to select dish view after clicking create new dinner button
	container.find("#dinner-overview-view-print-full-recipe").click ( function () {
		// notify the moel to call the
		app.generalController(app.getDinnerPrintoutScreen());						// displaying the dinner-printout-view
	});

	// Moving from dinner overview view to select dish view
	container.find("#dinner-overview-view-go-back-n-edit").click ( function () {
		app.generalController(app.getSelectDishScreen());
	});
}
