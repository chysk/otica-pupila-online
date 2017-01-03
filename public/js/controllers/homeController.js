var app = angular.module("homeController", [
	"ngRoute",
	"moltinStoreApp.moltin"
	]);

app.controller('HomeCtrl', function($scope,$http){
	//slide show
	var slideShow;
	(slideShow = function(){
		var slide = {
			num : 4
		}
		var j=1;
		for(var i=1;i<slide.num;i++){
			console.log('oki'+i);
			$(".banner:first" ).clone().appendTo( ".rslides" );
		}
		$(".banner img").each(function(){
			$(this).attr("src", 'img/slides/'+j+'.png');
			j++
		});
	})();

	$(".rslides").responsiveSlides({
		auto: true,
		pager: true,
		timeout: 5000,
		pause: true
	});

});