## Lesson Breakdown 

This is a breakdown of the top level functionality for building the Feedr application

* Our reader will pull feeds from various API's such as Mashable, Reddit & Digg

* The user will be able to filter the feeds via a dropdown

* The user will be able to filter the current feeds using search terms

* Clicking an article will render a modal with more info

## Issues and Resolutions

This section will contain a list of all issues encountered and their resolution

ERROR: app.js:34 Uncaught SyntaxError: Unexpected identifier
RESOLUTION: Missing comma after first object in sources {} object

ERROR:  app.js:55 Uncaught SyntaxError: Unexpected identifier
$.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", 
RESOLUTION: Missing closing } after both the Digg and Reddit sources sub objects

ERROR: angular.js:68 Uncaught Error: [$injector:modulerr] Failed to instantiate module feedrApp due to: Error: [$injector:nomod] Module 'feedrApp' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.
RESOLUTION: Missing closing { 

ERROR: app.js:77 Uncaught TypeError: Cannot read property 'keys' of undefined
RESOLUTION: Mispelled Dig..should be Digg

ERROR: console.log(response + ".data") outputs [object Object].data  
RESOLUTION: console.log is converting response into a string and outputing it's object type
