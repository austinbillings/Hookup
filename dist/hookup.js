angular.module('Hookup', []);

// xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX
// xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX
//
//  	 googleAnalytics.js // Dynamically incorporate GA
// 			         by austinbillings
//					   License: MIT
//
// xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX
// xXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX

angular.module('Hookup').directive('googleAnalytics', function($timeout) {
	return {
		restrict: 'E',
		scope: false,
		link: function (scope, element, attrs){
			attrs.$observe('key', function (key) {
				var tag = document.createElement("script");
				tag.setAttribute('type','text/javascript');
				tag.innerHTML = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', '" + key + "', 'auto');ga('send', 'pageview');";
				element.append(tag);
			});
		}
	}
});

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
