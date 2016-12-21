angular.module('moltinStoreApp.moltin', [])
.factory('MoltinAuth', function($q){
	var deferred = $q.defer();
	var moltin = new Moltin({publicId: 'DUVCQo6PfjeGrGcLGHHW1l3mOTGjH9tcY85vE4bon6'});
	moltin.Authenticate(function(){
		deferred.resolve(moltin);
	});

	return deferred.promise;
});