var orm = require("../config/orm.js");

var burger = {
    
    searchAll: function(callBack) {
      orm.searchAll("burgers", function(res) {
        callBack(res);
      });
    },
    
    insert: function(value, callBack) {
      orm.insert("burgers", value, function(res) {
        callBack(res);
      });
    },

    update: function(column, condition, callBack) {
      orm.update("burgers", column, condition, function(res) {
        callBack(res);
      });
    }
};


module.exports = burger;