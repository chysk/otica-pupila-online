var app = angular.module("prodController", [
	"ngRoute",
	"moltinStoreApp.moltin"
	]);

app.controller('ProdCtrl', function($scope,$http,cartFact,categories){
	$scope.categories = categories;
});