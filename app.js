(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

	var toBuy = this;
	toBuy.items = ShoppingListCheckOffService.getToBuyList();

	toBuy.buyItem = function (itemIndex) {
			ShoppingListCheckOffService.buyItem(itemIndex);
	};

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtlist = this;
	boughtlist.items = ShoppingListCheckOffService.getBoughtList();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var tobuylist = [
	  {
	    name: "Milk",
	    quantity: "2"
	  },
		{
	    name: "Cake",
	    quantity: "2"
	  },
	  {
	    name: "Donuts",
	    quantity: "200"
	  },
	  {
	    name: "Cookies",
	    quantity: "300"
	  },
	  {
	    name: "Chocolate",
	    quantity: "5"
	  }
	];
	var boughtlist = [];

	service.buyItem = function (itemIndex) {
		boughtlist.push(tobuylist[itemIndex]);
		tobuylist.splice(itemIndex, 1);
	};

	service.getToBuyList = function () {
		return tobuylist;
  };

	service.getBoughtList = function () {
			return boughtlist;
	};
}



})();
