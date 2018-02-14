var DinnerOverviewViewController = function (container, model) {
	// Moving to select dish view after clicking create new dinner button
	container.find("#dinner-overview-view-print-full-recipe").click ( function () {
		container.find("#dinner-overview-view").hide(); 					// hiding the dinner-overview-view 
		container.find("#dinner-printout-view").show();						// displaying the dinner-printout-view
	});

	// Moving from dinner overview view to select dish view
	container.find("#dinner-overview-view-go-back-n-edit").click ( function () {
		container.find("#dinner-overview-view").hide(); 					// hiding the dinner-overview-view 
		container.find("#select-dish-view").show();
	});
}