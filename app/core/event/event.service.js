// Defining the service (Event) on the module (core.event).
// This service provides an API to load data asynchronously (alternative to $http)
angular.
	module('core.event').
	factory('Event', ['$resource',
		function($resource) {
			'use strict';

			return $resource('events/:eventId.json', {}, {
				query: {
					method: 'GET',
					params: {eventId: 'events'},
					isArray: true
				}
			});
		}
	]);