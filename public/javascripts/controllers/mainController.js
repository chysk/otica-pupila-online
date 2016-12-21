var app = angular.module("myApp", [
	"ngRoute",
	"moltinStoreApp.moltin"
	]);

//routes
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/",{
        templateUrl : "partials/home.html",
        controller: "HomeCtrl"
    })
    .when("/produtos",{
    	templateUrl : "partials/produtos.html",
    	controller : "ProdCtrl",
    	resolve: {
        	categories: function($q, MoltinAuth){
        		var deferred = $q.defer();
        		$q.when(MoltinAuth).then(function(moltin){
        			moltin.Category.List(null, function(categories){
        				deferred.resolve(categories)
        			});
        		})
        		return deferred.promise
        	}
        }
    })
    .when("/produtos/:id", {
        templateUrl : "partials/loja.html",
        controller : "LojaCtrl",
        resolve: {
        	categories: function($q, $route, MoltinAuth){
        		var deferred = $q.defer();
        		$q.when(MoltinAuth).then(function(moltin){
        			moltin.Category.Get($route.current.params.id, function(categories){
        				deferred.resolve(categories)
        			});
        		})
        		return deferred.promise
        	},
        	products: function($q, $route, MoltinAuth){
        		var deferred = $q.defer();
        		$q.when(MoltinAuth).then(function(moltin){
        			moltin.Product.List({category : $route.current.params.id}, function(categories){
        				deferred.resolve(categories)
        			});
        		})
        		return deferred.promise
        	},
        	moltin: function($q, MoltinAuth){
        		return MoltinAuth;
        	}
        }
    })
    .when("/carrinho", {
    	templateUrl : "partials/carrinho.html",
    	controller : "CartCtrl",
    	resolve:{
    		categories: function($q, MoltinAuth){
        		var deferred = $q.defer();
        		$q.when(MoltinAuth).then(function(moltin){
        			moltin.Category.List(null, function(categories){
        				deferred.resolve(categories)
        			});
        		})
    			return deferred.promise
        	},
	        products: function($q, $route, MoltinAuth){
        		var deferred = $q.defer();
        		$q.when(MoltinAuth).then(function(moltin){
        			moltin.Product.List({category : $route.current.params.id}, function(categories){
        				deferred.resolve(categories)
        			});
        		})
        		return deferred.promise
        	}
    	}
    })
    .otherwise({
        templateUrl : "partials/404.html"
    });

    $locationProvider.html5Mode(true);
});

app.factory('cartFact', function(){
	return cart = [];
});

app.controller('MainCtrl',function($scope){
    
});

app.controller('HomeCtrl', function($scope,$http){

});

app.controller('ProdCtrl', function($scope,$http,cartFact,categories){
	$scope.categories = categories;
});

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

app.controller('CartCtrl', function($scope,$http,cartFact,categories,products){
	$scope.carrinho = cart;

	$scope.remove = function(id){
			
		};
	
});