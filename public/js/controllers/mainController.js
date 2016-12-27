var app = angular.module("myApp", [
	"ngRoute",
	"moltinStoreApp.moltin",
    "lojaController",
    "cartController",
    "prodController",
    "homeController"
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

app.controller('MainCtrl',function($scope, $location){
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});