const express = require("express");
const db = require("../data/config");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const fruits = await db("fruits");
    res.json(fruits);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    const fruit = await db("fruits")
      .where({ id: id })
      .first();
    res.json(fruit);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res, next) => {
  const fruitData = req.body;
  db("fruits")
    .insert(fruitData)
    .then(ids => {
      db("fruits")
        .where({ id: ids[0] })
        .first()
        .then(newFruitEntry => {
          res.status(201).json(newFruitEntry);
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

module.exports = router;
