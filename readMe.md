This is an OOP version of Thomas Davis tutorial 'Backbone.js Beginner Video Tutorial' located at:
http://backbonetutorials.com/organizing-backbone-using-modules

Currently served by Apache at:
http://brunoricard.local/userManager-1

It uses:

1/ -requiresjs- for asynchronous javascript and modules loading
Since Backbone is not AMD enabled, needs to call 'define' at the begining of each module to define/load dependencies
The requirejs 'text.js' plugin is also used

2/ Underscore _ for templating

3/ Backbone

4/ CORS enabled Server built with:
Node or more specifically express for the server part
Redis for Database: Add-on on Heroku
nohm
url and body-parser
newrelic: Add-on to Heroku to monitor, troubleshoot, and tune production web applications

Server is hosted on Heroku at: http://blooming-dawn-3496.herokuapp.com
