var app = angular.module("cartController", [
	"ngRoute",
	"moltinStoreApp.moltin"
	]);

app.controller('CartCtrl', function($scope,$http,cartFact,categories,products){
	$scope.carrinho = cart;

	$scope.remove = function(id){
			
		};
	
});