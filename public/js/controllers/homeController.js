var app = angular.module("homeController", [
	"ngRoute",
	"moltinStoreApp.moltin"
	]);

app.controller('HomeCtrl', function($scope,$http){
	var numSlide = 3
	for(var i=0;i<numSlide;i++){
		$( ".banner:first" ).clone().appendTo( ".bannerUL" );
	}
	var j = 1;
	$(".banner").each(function(){
		console.log('oi');
		$(this).css('background-image', 'url(img/slides/slide'+j+'.png)');
		$(this).css('background-size', 'contain');
		$(this).css('background-repeat', 'no-repeat');
		j++
	});
});