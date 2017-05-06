var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req, res) {

    burger.searchAll(function(data) {
        var handlebarsObject = {
            burgers: data
        };
        res.render("index", handlebarsObject);
    });
});


router.post("/", function(req, res) {
    burger.insert(req.body.burgerInput, function() {
        res.redirect("/");
    });
});


router.put("/:id", function(req, res) {

    var condition = "id = " + req.params.id;

    burger.update({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});


module.exports = router;