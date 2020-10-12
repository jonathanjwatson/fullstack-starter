const express = require("express");
const router = express.Router();
const db = require("../models");

// VIEWS ROUTES

router.get("/thing", (req, res) => {
  // ALL the Things should be displayed
  // DB query
  db.Thing.findAll().then((allThings) => {
    res.render("all-things", { allThings: allThings });
  });
});

router.get("/thing/new", (req, res) => {
  res.render("new-thing");
});

router.get("/thing/:id", (req, res) => {
  db.Thing.findOne({
    where: {
      id: req.params.id,
    },
  }).then((foundThing) => {
    console.log(foundThing);
    res.render("single-thing", {
      name: foundThing.name,
      price: foundThing.price,
      id: foundThing.id,
    });
  });
});

router.get("/thing/:id/edit", (req, res) => {
  db.Thing.findOne({
    where: {
      id: req.params.id,
    },
  }).then((foundThing) => {
    console.log(foundThing);
    res.render("edit-thing", {
      name: foundThing.name,
      price: foundThing.price,
      id: foundThing.id,
    });
  });
});

// API ROUTES

router.post("/api/thing", (req, res) => {
  console.log(req.body);
  db.Thing.create(req.body)
    .then((newThing) => {
      res.json({
        error: false,
        data: newThing,
        message: "Successfully created new thing.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new thing.",
      });
    });
});

router.put("/api/thing/:id", (req, res) => {
  db.Thing.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((updatedObject) => {
    console.log(updatedObject);
    res.end();
  });
});

router.delete("/api/thing/:id", (req, res) => {
  db.Thing.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.end();
  });
});

module.exports = router;
