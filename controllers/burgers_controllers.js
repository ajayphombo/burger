var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  burger.insert(["burger_name", "devoured"], [
    req.body.burger_name, false], function(result) {
    //res.json({ id: result.insertId });
    res.redirect("/");

  });
});

router.put("/api/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.update({devoured: true}, condition, function(result) {
    res.redirect("/");

  });

});



router.delete("/api/delete/:id", function(req, res) {
  var condition = "id=" + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
