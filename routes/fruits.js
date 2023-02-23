const { Router } = require("express");
const router = Router();

let fruits = [
  {
    name: "Apple",
    color: "Red",
  },
  {
    name: "Banana",
    color: "Yellow",
  },
  {
    name: "Kiwi",
    color: "Green",
  },
  {
    name: "Grape",
    color: "Purple",
  },
];

router.get("/", (req, res) => {
  res.status(201).send(fruits);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  id = Number(id);
  if (id <= fruits.length) {
    res.status(201).send(fruits[id - 1]);
  } else {
    res.status(404).send({ err: "Route does not exist" });
  }
});

module.exports = router;
