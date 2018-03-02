
var WelcomeViewController = function (container, model, app) {

	// Moving to select dish view after clicking create new dinner button
	container.find("#create-new-dinner").click ( function (event) {
		app.generalController(app.getSelectDishScreen());
	});
}
