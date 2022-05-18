import express from "express";
const app = express();
const port = process.env.PORT || 5000;

app
  .route("/")
  .get((req, res) => res.send("We retrieve a resource"))
  .post((req, res) => res.send("We create a resource"))
  .put((req, res) => res.send("We update a resource"))
  .delete((req, res) => res.send("We delete a resource"));

app.listen(port, () =>
  console.log("Server listening at http://localhost:${port}")
);
