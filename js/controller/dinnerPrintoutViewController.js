var DinnerPrintoutViewController = function (container, model, app) {

	container.find("#dinner-printout-view-go-back-n-edit").click( function () {
		app.generalController(app.getSelectDishScreen());
	});
}
