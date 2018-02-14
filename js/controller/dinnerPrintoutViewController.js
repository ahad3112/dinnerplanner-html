var DinnerPrintoutViewController = function (container, model) {

	container.find("#dinner-printout-view-go-back-n-edit").click( function () {
		container.find("#dinner-printout-view").hide();
		container.find("#select-dish-view").show();
	});
}