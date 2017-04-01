//Use routeProvider to configure the routes in the application 
angular.
	module('eventApp').
	config(['$locationProvider', '$routeProvider',
		function config($locationProvider, $routeProvider) {
			'use strict';
			$locationProvider.hashPrefix('!');

			$routeProvider.
				when('/events', {
					template: '<event-list></event-list>'	//Will load the event-list component (to show list of events)
				}).
				otherwise('/events');
		}
]);
