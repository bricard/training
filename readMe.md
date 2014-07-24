userManager-2
=============

This is an OOP version of Thomas Davis tutorial 'Backbone.js Beginner Video Tutorial' located at:<br>
http://backbonetutorials.com/organizing-backbone-using-modules

Currently served by Apache at:<br>
http://brunoricard.local/userManager-2

It uses:

1/ -requiresjs- for asynchronous javascript and modules loading.<br>
Since Backbone is not AMD enabled, needs to call 'define' at the begining of each module to define/load dependencies.<br>
The requirejs 'text.js' plugin is also used.

2/ Underscore _ for templating

3/ Backbone

4/ CORS enabled Server built with:<br>
- Node or more specifically express for the server part<br>
- Redis for Database: Add-on on Heroku<br>
- nohm<br>
- url and body-parser<br>
- newrelic: Add-on to Heroku to monitor, troubleshoot, and tune production web applications.

Server is hosted on Heroku at:<br>
http://usermanager-2.herokuapp.com
