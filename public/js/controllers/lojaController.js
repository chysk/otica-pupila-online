var app = angular.module("myApp", [
	"ngRoute",
	"moltinStoreApp.moltin"
	]);

app.controller('LojaCtrl', function($scope,$http,cartFact,categories){
	$scope.categories = categories;
	console.log(categories);

	//ctrler functions
	var refresh = function(){
		$http.get('/oculosdb')
		.then(
			function(response){
				$scope.oculosdb = response.data;
			},
			function(error){
				console.log("errrrrrrou");
			});
	}
	refresh();

	var controleQntProd = function(){
		var prodAdded = document.getElementById('numbOfProd');
		if(cart.length > 0){
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
			totalPrice = totalPrice + parseFloat(p[i].price);
		}
		price.innerHTML = "R$ "+ totalPrice.toFixed(2);
	}
	if(cart)
		somaTotal(cart);

	//scope functions
	$scope.addOnCar = function(id){
		$http.get('/oculosdb/' + id)
		.then(
			function(response){
				cart.push(response.data);
				controleQntProd();
				somaTotal(cart);
			},
			function(err){
				console.log('errroou');
			});
	};
});
