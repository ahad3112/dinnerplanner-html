var DinnerPrintoutView = function (container, model) {

	/*--------------------------------- Adding the selected no of guests ------------------------------*/
	var selectedNoOfPleople = container.find("#dinner-printout-selected-people");
	selectedNoOfPleople.html(model.getNumberOfGuests());

	/*--------------------------------- Adding dishes info  ------------------------------*/
	var printOutTable = container.find("#dinner-printout-body-dishes-info");

	var dishInfo = " Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
				   " Phasellus imperdiet, nulla et dictum interdum, nisi lorem" +
				   " egestas odio, vitae scelerisque enim ligula venenatis dolor." +
				   " Maecenas nisl est, ultrices nec congue eget, auctor vitae massa." +
				   " Fusce luctus vestibulum augue ut aliquet."

	var dishPreparation = " Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
				   " Phasellus imperdiet, nulla et dictum interdum, nisi lorem" +
				   " egestas odio, vitae scelerisque enim ligula venenatis dolor." +
				   " Maecenas nisl est, ultrices nec congue eget, auctor vitae massa." +
				   " Fusce luctus vestibulum augue ut aliquet." + 
				   " Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
				   " Phasellus imperdiet, nulla et dictum interdum, nisi lorem" +
				   " egestas odio, vitae scelerisque enim ligula venenatis dolor." +
				   " Maecenas nisl est, ultrices nec congue eget, auctor vitae massa." +
				   " Fusce luctus vestibulum augue ut aliquet."

	var myMenus = model.getFullMenu();						// all dishes in my menu
	var pic ;												// variable to hold the image path
	var dishName;											// variable to hold the name of the dish

	for(key in myMenus){
		pic =  "images/" + myMenus[key].image;
		dishName = myMenus[key].name;

		printOutTable.append( $("<tr>").append($("<td>").append($("<img>").attr("src",pic).attr("alt","Figure not found")) )
									  .append($("<td>").append($("<article>").append($("<h3>").html(dishName))
									  										 .append($("<p>").html(dishInfo).css("text-align","justify"))
									  						  )
									  	     )
									  .append($("<td>").append($("<article>").append($("<h3>").html("PREPARATION"))
									  										 .append($("<p>").html(dishPreparation).css("text-align","justify"))
									  						  )
									  	     )
			                );

	}
}