'use strict';
(function(){ 

	//Construction function
	function Phone(brand, price, color, screenSize) {
		this.brand = brand;
		this.price = price;
		this.color = color;
		this.screenSize = screenSize;
	}	

	//Prototype method
	Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", screen size is " + this.screenSize + "'' , color is " + this.color + " and the price is " + this.price + ".");
	};

	//Creating objects
	var iPhone6s = new Phone("Apple", 2250, "silver", 5);
	var SamsungGalaxyS6 = new Phone("Samsung", 1650, "black", 5.3);
	var OnePlusOne = new Phone("Xiaomi", 970 , "orchid", 5.5);

	iPhone6s.printInfo();
	SamsungGalaxyS6.printInfo();
	OnePlusOne.printInfo();

})(); 