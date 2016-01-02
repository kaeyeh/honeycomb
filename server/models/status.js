module.exports = function(Status) {
  Status.on('dataSourceAttached', function(obj){
    var find = Status.find;
    Status.find = function(filter, cb) {
      return find.apply(this, arguments);
    };
  });
};
