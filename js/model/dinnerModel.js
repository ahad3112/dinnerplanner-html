//DinnerModel Object constructor
var DinnerModel = function() {

	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu
	var myDinnerMenu = {noOfGuests: 1, myDishes: [] };

	// variable to hold the selected meny type
	var selectedMenuType = "all";    // all is default value

	// variable to holds the filter to search dishes
	var selectedFiler;

  // variable to hold the selected dishes to display ditails
  var selectedDishIdForDetails;

	// List of observers in the model
	var observers = [];

	this.setNumberOfGuests = function(num) {
		//TODO Lab 1
		myDinnerMenu.noOfGuests = num;
		// notify all observers
		notifyObservers("updateGuest");
	}

	this.getNumberOfGuests = function() {
		//TODO Lab 1
		return myDinnerMenu.noOfGuests;
	}

	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function(type) {
		//TODO Lab 1
		for(key in myDinnerMenu.myDishes) {
			if(myDinnerMenu.myDishes[key].type === type){ // need to check with ==
				return myDinnerMenu.myDishes[key];
			}
		}
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		//TODO Lab 1
		return myDinnerMenu.myDishes;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//TODO Lab 1
		var myIngredients = [];
		for (key in myDinnerMenu.myDishes) {
			myIngredients.push(myDinnerMenu.myDishes[key].ingredients);
		}

		return myIngredients;

	}

	// This method return the cost of a single dish from the menu using dish ID cost to be used in the selected menu list
	/********************************************* Added by me ******************************/
	this.getSingleDishPrice = function (id) {
		var dishPrice = 0.0;

		singleDish:
		for (key in myDinnerMenu.myDishes) {
			if ( myDinnerMenu.myDishes[key].id == id) {
				for(ing in myDinnerMenu.myDishes[key].ingredients){
					dishPrice += myDinnerMenu.myDishes[key].ingredients[ing].price;
				}

				break singleDish;
			}
		}
		return myDinnerMenu.noOfGuests * dishPrice;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		//TODO Lab 1
		var totalPrice = 0.0;
		for (key in myDinnerMenu.myDishes) {
			for(ing in myDinnerMenu.myDishes[key].ingredients){
				totalPrice += myDinnerMenu.myDishes[key].ingredients[ing].price;
			}
		}

		return myDinnerMenu.noOfGuests * totalPrice;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		//TODO Lab 1
		// First get the dish with the ID
		var dishToAdd;

		getDishWithID:
		for(key in dishes){
			if(dishes[key].id == id) {
				dishToAdd = dishes[key];
				break getDishWithID;
			}
		}

		// first remove the dish with the same type if it is in the menu
		matchingTYPE:
		for (key1 in myDinnerMenu.myDishes) {
			if(myDinnerMenu.myDishes[key1].type == dishToAdd.type){
				myDinnerMenu.myDishes.splice(key1,1); 		// first param: position where new element should be added
															// second param: how many elements should be removed
															// third, fourth, ... param: elements to be added
															// ref: https://www.w3schools.com/js/js_array_methods.asp
				break matchingTYPE;
			}
		}

		// Adding dish
		myDinnerMenu.myDishes.push(dishes[key]);

	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		//TODO Lab 1
		matchingID:
		for (key in myDinnerMenu.myDishes) {
			if(myDinnerMenu.myDishes[key].id == id){
				myDinnerMenu.myDishes.splice(key,1); 		// first param: position where new element should be added
															// second param: how many elements should be removed
															// third, fourth, ... param: elements to be added
															// ref: https://www.w3schools.com/js/js_array_methods.asp
				break matchingID;
			}
		}
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
	  if(type == 'all'){
	  	return dishes;
	  } else {

		  return dishes.filter(function(dish) {
			var found = true;
			if(filter){
				found = false;
				dish.ingredients.forEach(function(ingredient) {
					if(ingredient.name.indexOf(filter)!=-1) {
						found = true;
					}
				});
				if(dish.name.indexOf(filter) != -1)
				{
					found = true;
				}
			}
		  	return dish.type == type && found;
		  });
	  }
	}

  // function that returns a dish of specific name
	this.getDishUsingName = function (name) {
	  for(key in dishes){
			if(dishes[key].name == name) {
				return dishes[key];
			}
		}
	}

	// function that returns a dish of specific ID
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}

	// getter method for selected meny type
	this.getSelectedMenuType = function(){
		return selectedMenuType;
	}

  /*********************  Methods related to event listener and observers *****************************/
  // this method register the selected dish for details
  this.showSelectedDishDetails = function(selectedDishId) {
    selectedDishIdForDetails = selectedDishId;
    notifyObservers("updateIngredients");
  }


  // this method add the selected dish to the dinnr menu
  this.addSelectedDish = function(){
    var selectedDish = this.getDish(selectedDishIdForDetails);
    // adding the selected dish to my dinnermenu
    this.addDishToMenu(selectedDish.id);
    notifyObservers("updateMyDinnerList");
  }
	// getter method for selected filter
	this.getSelectedFilter = function (){
		return selectedFiler;
	}

	// getter method for selected dish id
	this.getSelectedDishIdForDetails = function(){
		return selectedDishIdForDetails;
	}

	// This method capture the selected dinner type to be displayed in the select dish view
	this.updateSelectedMenuType = function (menuType){
		selectedMenuType = menuType;
		notifyObservers("updateDishesOfSelectedType");
	}

	// This method capture the selected filter to display dishes in the select dish view
	this.updateSelectedFilter = function (filter){
		selectedFiler = filter;
		notifyObservers("updateDishesOfSelectedType");
	}

	// this method update the displayed dishes using user preferences
	this.displayUserDefinedDishes = function () {
		notifyObservers("updateDishesOfSelectedType");
	}


	// This method add observers to the model
	this.addObserver = function(observer) {
		observers.push(observer);
	}


	// This method will notify each observers. Only called wiithin the model
	var notifyObservers = function(obj) {
		for(obs in observers){
			observers[obs].update(obj);
		}

	}
	// the dishes variable contains an array of all the
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name,
	// quantity (a number), price (a number) and unit (string
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}
