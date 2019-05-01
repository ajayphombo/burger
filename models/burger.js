var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insert: function(colToInsert,valOfCol,cb) {
    orm.insertOne("burgers", colToInsert,valOfCol, function(res) {
      cb(res);
    });
  },
  update: function(colToUpdate,condition,cb) {
    orm.updateOne("burgers", colToUpdate,condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
