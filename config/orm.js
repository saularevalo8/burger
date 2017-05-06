var connection = require("../config/connection.js");


function changeToSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
    // function SELECTS ALL FROM TABLE and returns result
    searchAll: function(tableInput, callBack) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    },

    // function INSERT INTO TABLE and returns result
    insert: function(tableInput, value, callBack) {

        var queryString = "INSERT INTO " + tableInput;

        queryString += ' (burger_name, devoured) VALUES ("';
        queryString += value;
        queryString += '", false); ';

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    },

    // function UPDATE TABLE, SET VALUE and returns result
    update: function(tableInput, column, condition, callBack) {

        var queryString = "UPDATE " + tableInput;

        queryString += " SET ";
        queryString += changeToSql(column);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    }
}

module.exports = orm;