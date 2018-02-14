
var WelcomeViewController = function (container, model) {

	// Moving to select dish view after clicking create new dinner button
	container.find("#create-new-dinner").click ( function () {
		container.find("#welcome-view").hide(); 					// hiding the wlcome view 
		container.find("#select-dish-view").show();										// displaying the select dish view
	});
}