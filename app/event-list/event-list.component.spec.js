//Unit test [Karma, Jasmine] to test the eventList component 
describe('eventList', function() {
  'use strict';

  // Load the module that contains the `EventList` component before each test
  beforeEach(module('eventList'));

  // Test the controller
  describe('EventListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('events/events.json')
                  .respond([{name: 'Wöchentlicher Blockbuster-Filmclub'}, {name: 'Abend der Liebesfilme'}]);

      ctrl = $componentController('eventList');
    }));

    it('should create a `events` property with 2 events fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.events).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.events).toEqual([{name: 'Wöchentlicher Blockbuster-Filmclub'}, {name: 'Abend der Liebesfilme'}]);
    });

    it('should set a default value for the `orderBy` property', function() {
      expect(ctrl.orderBy).toBe('date');
    });

  });

});