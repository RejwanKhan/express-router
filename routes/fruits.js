const { Router } = require("express");
const router = Router();
const { check, validationResult } = require("express-validator");
const { route } = require("./users");

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
  let { id } = req.params;
  id = Number(id);
  if (id <= fruits.length) {
    res.status(201).send(fruits[id - 1]);
  } else {
    res.status(404).send({ err: "Route does not exist" });
  }
});

//
router.post("/", [check("color").trim().not().isEmpty()], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(500).send({ errors: errors.array() });
  } else {
    fruits.push(req.body);
    res.status(201).send("Fruit has been created");
  }
});

router.put("/:id", (req, res) => {
  let { id } = req.params;
  id = Number(id);
  const Fruit = fruits[id - 1];
  const { name, color } = req.body;

  const valid = () => res.status(201).send("Fruit has been created");
  if ((name, color)) {
    Fruit.name = name;
    Fruit.color = color;
    valid();
  } else if (name) {
    Fruit.name = name;
    valid();
  } else if (age) {
    Fruit.color = color;
    valid();
  } else {
    res.send("User was not updated");
  }
});

router.delete("/:id", (req, res) => {
  let { id } = req.params;
  id = Number(id);
  if (id <= fruits.length) {
    fruits.splice(id - 1, 1);
    res.send("Fruit has been deleted");
  } else {
    res.status(404).send("Fruit could not be found");
  }
});

module.exports = router;
