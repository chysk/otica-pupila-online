var app = angular.module("myApp", [
	"ngRoute",
	"moltinStoreApp.moltin"
	]);

app.controller('CartCtrl', function($scope,$http,cartFact,categories){
	console.log(cart);
	$scope.products = cart;

	$scope.remove = function(id){
			$http.get('/oculosdb/' + id)
			.then(
				function(response){
					for(var i = 0; i < cart.length; i++){
						if(cart[i]._id === response.data._id){
							cart.splice(i, 1);
							break;
						}
					}
					$scope.products = cart;
				},
				function(errooor){
					console.log('nao rolou');
				});
		};
});