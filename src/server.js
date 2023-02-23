const express = require("express");
const app = express();
const { check, validationResult } = require("express-validator");
const userRouter = require("../routes/users");
const fruitRouter = require("../routes/fruits");

app.use(express.json());
app.use("/users", userRouter);
app.use("/fruits", fruitRouter);
const port = 3000;

// Express Routes

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
