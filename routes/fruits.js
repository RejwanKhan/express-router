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
  let { id } = req.params;
  id = Number(id);
  if (id <= fruits.length) {
    res.status(201).send(fruits[id - 1]);
  } else {
    res.status(404).send({ err: "Route does not exist" });
  }
});

router.post("/", (req, res) => {
  const { name, age } = req.body;
  if (name && age) {
    users.push(req.body);
  } else {
    res.send("Could not create new user, does not have all the correct fields");
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
    Fruit.age = age;
    valid();
  } else if (name) {
    Fruit.name = name;
    valid();
  } else if (age) {
    Fruit.age = age;
    valid();
  } else {
    res.send("User was not updated");
  }
});

router.delete("/:id", (req, res) => {
  let { id } = req.params;
  id = Number(id);
  if (id <= users.length) {
    fruits.splice(id - 1, 1);
    res.send("User has been deleted");
  } else {
    res.status(404).send("User could not be found");
  }
});

module.exports = router;
