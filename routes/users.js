const { Router } = require("express");
const router = Router();
const { check, validationResult } = require("express-validator");
let users = [
  {
    name: "User 1",
    age: 30,
  },
  {
    name: "User 2",
    age: 45,
  },
  {
    name: "User 3",
    age: 27,
  },
  {
    name: "User 4",
    age: 22,
  },
];

router.get("/", (req, res) => {
  res.status(201).send(users);
});

router.get("/:id", (req, res) => {
  let { id } = req.params;
  id = Number(id);
  if (id <= users.length) {
    res.status(201).send(users[id - 1]);
  } else {
    return res.status(404).send({ error: "Route does not exist" });
  }
});

router.post("/", [check("name").trim().not().isEmpty()], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send({ errors: errors.array() });
  } else {
    users.push(req.body);
    res.status(201).send("User has been created");
  }
});

router.put("/:id", (req, res) => {
  let { id } = req.params;
  id = Number(id);
  const User = users[id - 1];
  const { name, age } = req.body;

  const valid = () => res.status(201).send("User has been created");
  if ((name, age)) {
    User.name = name;
    User.age = age;
    valid();
  } else if (name) {
    User.name = name;
    valid();
  } else if (age) {
    User.age = age;
    valid();
  } else {
    res.send("User was not updated");
  }
});

router.delete("/:id", (req, res) => {
  let { id } = req.params;
  id = Number(id);
  if (id <= users.length) {
    users.splice(id - 1, 1);
    res.send("User has been deleted");
  } else {
    res.status(404).send("User could not be found");
  }
});

module.exports = router;
