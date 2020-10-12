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
  res.render("single-thing");
});

router.get("/thing/:id/edit", (req, res) => {
  res.render("edit-thing");
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

module.exports = router;
