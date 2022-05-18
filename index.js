// import express
import express from "express";
// call express function
const app = express();
// store link of database in port variable
const port = process.env.PORT || 5000;
// use middleware app.use
app.use(express.json());

// basic route
app
  .route("/")
  .get((req, res) =>
    res.send(
      "<h1>Welcome on our API</h1><h2>following endpoints are available:</h2>"
    )
  );

  // listen to incoming client requests
app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
