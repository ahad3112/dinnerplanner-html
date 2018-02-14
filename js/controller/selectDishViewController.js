var SelectDishViewController = function (container, model) {

	// Adding controller for responsive side bar... Not working
	// container.find("#collapsible-icon").click ( function () {
	// 	var x = container.find("#select-dish-view-left-panel");
 //        if (x.className === "select-dish-view-row") {
 //            x.className += " responsive";
 //        } else {
 //            x.className = "select-dish-view-row";
 //        }
	// });

	model.addObserver(this);

	this.update = function () {
		setController();
	}

	var setController = function () {
		// Moving from select dish view to dish details after clicking on a dish
		container.find("#select-dish-view-bottom-right-panel a").click( function (event) {
			var target = $(event.target);
			var dishName = target.text();
			model.updateSelectedDishForDetails(dishName);
			container.find("#select-dish-view-right-panel").hide(); 					// hiding the select-dish-view-right-panel
			container.find("#dish-details-view-right-panel").show();					// displaying the dish-details-view-right-panel
		});

		// Go to dinner details view after clicking confirm dinner button
		container.find("#select-dish-view-confirm-dinner").click ( function (){
			container.find("#select-dish-view").hide();
			container.find("#dinner-overview-view").show();
		});

		// Changing the dish according the dinner type
		// debugger;
		container.find("#search-by-menu").change ( function (event) {
			// Get the selected menu type
			var menuType = event.target.value;
			model.updateSelectedMenuType(menuType);
			//console.log($(event.target).parent());
		});

		container.find("#search-by-keyWords").change( function (event) {
			// Get the selected menu type
			var filter = event.target.value;
			model.updateSelectedFilter(filter);
		});

		// adding event listener for search option
		container.find("#select-dish-view-search").click ( function (event) {
			model.displayUserDefinedDishes();
		});
	}

	// First time call
	setController();
}
