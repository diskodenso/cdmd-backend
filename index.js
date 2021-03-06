// import dotenv
import 'dotenv/config';
// import express
import express from "express";
// import articlesRouter
import articlesRouter from './routes/articlesRouter.js';
import authorsRouter from './routes/authorsRouter.js';
// call express function
const app = express();
// store link of database in port variable
const port = process.env.PORT || 5000;
// use middleware app.use
app.use(express.json());
// use middleware to declare main route for authorsRouter
app.use('/api/authors', authorsRouter);
// use middleware to declare main route for articlesRouter
app.use('/api/articles', articlesRouter);


// basic route
app
  .route("/")
  .get((req, res) =>
    res.send(
      "<h1>Willkommen auf unserer API</h1><h2>folgende Endpunkte sind verfügbar:</h2><p>/articles -> alle Blogposts abrufen & neue Blogposts hinzufügen</p><p>/articles/:id -> einzelnen Blogposts abrufen, Blogposts löschen, Blogposts aktualisieren</p><p>/authors -> alle Authors abrufen & neue Authors hinzufügen</p><p>/authors/:id -> einzelnen Authors abrufen, Author löschen, Author aktualisieren</p>"
    )
  );
  
  // listen to incoming client requests
app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
