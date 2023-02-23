const { Router } = require("express");
const router = Router();

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
    res.status(404).send({ error: "Route does not exist" });
  }
});

module.exports = router;
