# angular-eventApp: An application to show events using Angular1.5

## Notes:
1. Application uses Angular 1.5
2. Bootstrap: styling 
3. Bower: Dependency management
4. Karma/Jasmine: Unit test
5. Similar framework/tools and coding style as described in https://docs.angularjs.org/tutorial
6. To run the application: npm start [This will start a web server on localhost:8000]
7. To run the unit test: npm test


## Application features
Angular single-page application with the following capabilities:
- Loads the events JSON asynchronously.
- Lists the events sorted by date showing the thumbnail, title, description, date and canton for each event.
- Makes it possible to filter the events:
  - By canton and
  - By date:
    - By month
- Can filter both by canton AND by date at the same time. 
- Unit test for eventList component


## Directory Layout
```
app/                              --> all of the source files for the application
  bower_components/               --> For Dependency management
  core/                           --> Common services (Uses ngResource to load data asynchronously)
    event/
      event.module.js   
      event.service.js
    core.module.js
  event-list/                     --> EventList component (to show list of events)
    event-list.component.js       --> Component (with template, controller, filters)
    event-list.component.spec.js  --> Unit test in [Karma, Jasmine]
    event-list.module.js          --> EventList Module 
    event-list.template.html      --> Template for EventList
  events/
    events.json                   --> JSON file wih Events data
  mockImg
    event/                        --> Thumbnails for events
  app.config.js                   --> Configure the routes for the application
  app.css                         --> default stylesheet 
  app.module.js                   --> main application module
  index.html                      --> app layout file (the main html template file of the app)
  .bowerrc              
  .gitignore
  .jshintrc
  bower.json
  karma.conf.js                   --> config file for running unit tests with Karma
  package.json
  README.md
```

## Running and Testing
To run the application: npm start
[This will start a server on localhost:8000 using 'http-server' module]

To run the unit test: npm test

Following are the scripts:
  {
    "postinstall": "bower install",
    "prestart": "npm install",
    "start": "http-server ./app -a localhost -p 8000 -c-1",

    "pretest": "npm install",
    "test": "karma start karma.conf.js",
    "test-single-run": "karma start karma.conf.js --single-run"
  }
