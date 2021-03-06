// server.js
// Based on: https://github.com/thomasdavis/backbonetutorials/blob/gh-pages/videos/beginner/README.md
var newrelic = require('newrelic');
var express = require('express');
var bodyParser = require('body-parser');
var nohm = require('nohm').Nohm;

var app = express();

// parse application
// bodyParser is not bundled with express anymore so needs to be required
// app.use(express.bodyParser());
app.use(bodyParser());

// For production
if (process.env.REDISTOGO_URL) {
  // inside if statement
  var rtg   = require("url").parse(process.env.REDISTOGO_URL);
  var redis = require("redis").createClient(rtg.port, rtg.hostname);

  redis.auth(rtg.auth.split(":")[1]);
}
 // For development
else {
  var redis = require("redis").createClient();
}

redis.on("connect", function() {
  nohm.setClient(redis);
  console.log("Nohm Connected to Redis Client");
});

var port = process.env.PORT || 3000;
console.log('AT port: ' + port);

var User = nohm.model('User', {
  properties: {
    firstname: {
      type: 'string',
    },
    lastname: {
      type: 'string',
    },
    age: {
      type: 'integer',
    }
  }
});

var listUsers = function (req, res) {
    User.find(function (err, ids) {
    var users = [];
    var len = ids.length;
    var count = 0;
    console.log(ids, 'ids');
    if(ids.length === 0) {
      res.send([]);

    } else {
      ids.forEach(function (id) {
        var user = new User();
        user.load(id, function (err, props) {
          users.push({id: this.id, firstname: props.firstname, lastname: props.lastname, age: props.age});
          if (++count === len) {
            res.send(users);
          }
        });
      });
    }
  });
}

var userDetails = function (req, res) {
  User.load(req.params.id, function (err, properties) {
    if(err) {
      res.send(404);
    } else {
      res.send(properties);
    }
  });
};

var deleteUser = function (req, res) {
  var user = new User();
  user.id = req.params.id;
  user.remove(function (err) {
    res.send(204);
  });
}

var createUser = function (req, res) {
  var user = new User();
  user.p(req.body);
  user.save(function (err) {
    res.send(user.allProperties(true));
  });
}

var updateUser = function (req, res) {
  var user = new User();
  user.id = req.params.id;
  user.p(req.body);
  user.save(function (err) {
    res.send(user.allProperties(true));
  });
}

app.all('*', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  next();
});


// Returns an array of user objects e.g. [{firstname: 'Thomas', lastname: 'Davis', age: 12}]
// Used for populating our user model
app.get('/users', listUsers);

// GET /users/:id - _Returns a single user object e.g. {id: 'xxxx', firstname: 'Thomas', lastname: 'Davis', age: 12}
app.get('/users/:id', userDetails);

// DELETE /users/:id - Deletes the given user from the server
app.del('/users/:id', deleteUser);

// POST /users - Creates a user based off the payload and returns the new user object e.g. {id: 'xxxx', firstname: 'Thomas', lastname: 'Davis', age: 12}
app.post('/users', createUser);

// PUT /users/:id - Updates the given user with the given payload and returns the newly updated user object
app.put('/users/:id', updateUser);


app.listen(port);


/*



  var user = new User();
  user.p({
    firstname: 'Mark',
    lastname: 'Davis',
    age: 10
  });

  user.save(function (err) {
      console.log('saved user! :-)');
  });

*/
