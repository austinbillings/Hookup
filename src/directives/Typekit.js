// xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX
// xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX
//
//  	 Typekit.js // Dynamically Load Typekit Fonts
// 			         by austinbillings
//					   License: MIT
//
// xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX
// xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX

angular.module('Hookup').directive('typekit', function($timeout) {
	return {
		restrict: 'E',
		scope: false,
		link: function (scope, element, attrs){
			attrs.$observe('key', function (key) {
				var loadTag = document.createElement("script");
				loadTag.type = "text/javascript";
				loadTag.setAttribute('src', '//use.typekit.net/' + key + '.js');
				element.append(loadTag);
				// wait in cycles of 50ms for Typekit to have loaded
				function attemptLoad () {
					if (typeof window.Typekit !== "undefined") {
						var execTag = document.createElement("script");
		                execTag.type = "text/javascript";
						execTag.innerHTML = "Typekit.load({async: true});";
						element.append(execTag);
					} else {
						$timeout(function(){
							attemptLoad();
						}, 50);
					}
				}
				attemptLoad();
			});
		}
	}
});
