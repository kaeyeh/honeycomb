module.exports = function(Session) {
  var zookeeper = require('node-zookeeper-client');

  Session.create = function(msg, cb) {



    var client = zookeeper.createClient('localhost:2181');
    var path = process.argv[2];

    client.once('connected', function () {
      console.log('Connected to the server.');
      cb(null, {
        sessionId: client

      });


    });

    client.connect();




  }


};
