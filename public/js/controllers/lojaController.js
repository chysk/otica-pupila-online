var app = angular.module("lojaController", [
	"ngRoute",
	"moltinStoreApp.moltin"
	]);

app.controller('LojaCtrl', function($scope,$http,cartFact,categories,products,moltin){
	$scope.categories = categories;
	$scope.products = products;

	var controleQntProd = function(){
		var prodAdded = document.getElementById('numbOfProd');
		if(cart.length > 0){
			console.log(cart);
			prodAdded.style.display = 'block';
			prodAdded.innerHTML = cart.length;
			if(cart.length === 10){
				prodAdded.style.padding = '0 0 0 2px';
			}else if(cart.length === 100){
				prodAdded.style.padding = '0';
			}
		}
	}
	controleQntProd();

	var totalPrice = 0;
	var somaTotal = function(p){
		var price = document.getElementById('price');
		totalPrice = 0;
		for(var i = 0; i < p.length; i++){
			var aux = p[i].price.value.split('R$')[1];
			console.log(aux);
			totalPrice = totalPrice + parseFloat(aux);
		}
		price.innerHTML = "R$" + totalPrice.toFixed(2);
	}
	if(cart)
		somaTotal(cart);

	//scope functions
	$scope.addOnCar = function(id){
		for(var i = 0; i<products.length; i++){
			if(id == products[i].id){
				cart.push(products[i]);
			}
		}
		somaTotal(cart);
		controleQntProd();
		};


});