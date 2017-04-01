//Register eventList component (and the associated template, controller, filters) on the eventList module
angular.
	module('eventList').
	component('eventList',{
		templateUrl: 'event-list/event-list.template.html',		// Template for eventList component
		controller: ['Event', function EventListController(Event) {
			'use strict';
			var self = this;
			self.events = Event.query();	//Use service 'Event' to load JSON data asynchronously
			self.orderBy = 'date';			//Order the events by date
			self.cantonSelected = '';
			self.monthSelected = '';
			self.daySelected = '';

			self.resetFilters = function() {	//Function to reset the filters
				self.cantonSelected = '';
				self.monthSelected = '';
				self.daySelected = '';
			};
		}]
	}).
	filter('uniqueCantons', function(){			// Filter to return list of unique cantons
		'use strict';
		return function(events, key) {			//Reference: StackOverflow
			var unique = {};
			var uniqueList = [];
			for(var i = 0; i < events.length; i++){
				if(typeof unique[events[i][key]] === 'undefined'){
					unique[events[i][key]] = '';
					uniqueList.push(events[i]);
				}
			}
			return uniqueList;
		};
	}).
	filter('filterEventsByCanton', function() {		// Filter to return the events for a given canton
		'use strict';
		return function(events, evnt){
			var filteredEvents = [];
			if (!evnt.hasOwnProperty('canton')) {
				filteredEvents = events;
			} else {
				for(var i=0; i<events.length; i++) {
					if (events[i].canton === evnt.canton) {
						filteredEvents.push(events[i]);
					}
				}
			}
			return filteredEvents;
		};
	}).
	filter('uniqueMonths', function() {				// Filter to return list of unique months
		'use strict';								// [TODO: Option values should be based on the selected canton]
		return function(events, key) {
			var unique = {};
			var uniqueList = [];
			for(var i = 0; i < events.length; i++){
				var date = new Date(events[i][key]);
				if(typeof unique[date.getMonth()+1] === 'undefined'){
					unique[date.getMonth()+1] = '';
					uniqueList.push(events[i]);
				}
			}
			return uniqueList;
		};
	}).
	filter('filterEventsByMonth', function() {		// Filter to return list of events for a given month
		'use strict';
		return function(events, evnt){
			var filteredEvents = [];
			if (!evnt.hasOwnProperty('date')) {
				filteredEvents = events;
			} else {
				var date1 = new Date(evnt.date);
				var monthChosen = date1.getMonth()+1;
				
				for(var i=0; i<events.length; i++) {
					var date2 = new Date(events[i].date);
					var eventMonth = date2.getMonth()+1;

					if (eventMonth === monthChosen) {
						filteredEvents.push(events[i]);
					}
				}
			}
			return filteredEvents;
		};
	}).
	filter('uniqueDays', function() {			// Filter to return list of unique days
		'use strict';							// [TODO: Option values should be based on the selected canton and month]
		return function(events, key) {
			var unique = {};
			var uniqueList = [];

			for(var i = 0; i < events.length; i++){
				var date = new Date(events[i][key]);
				if(typeof unique[date.getDay()] === 'undefined'){
					unique[date.getDay()] = '';
					uniqueList.push(events[i]);
				}
			}
			return uniqueList;
		};
	});											// [TODO: Filter events based on a given day]





