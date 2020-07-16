var orm = require("../config/orm.js");

var burger = {
  //select all burgers
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // create a new burger
  create: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  // update burger status
  update: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },

  //Deletes Burgers
  delete: function (col, val, cb) {
    orm.delete("burgers", col, val, function (res) {
      cb(res);
    });
  },
};
module.exports = burger;
