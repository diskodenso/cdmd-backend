// import pool
import pool from "../db/pg.js";

// we have to export every controller seperately
// each route need a controller

// ------ get all authors controller ------//
export const getAllAuthors = (req, res) => {
    console.log("this should work now")
    pool
        .query("SELECT * FROM authors")
        .then((data) => res.status(200).json({ authors: data.rows }))
        .catch((err) => res.status(404).json(err));
};

// ------ get single author controller ------//
export const getSingleAuthor = (req, res) => {
    const { id } = req.params;
    pool
        .query("SELECT * FROM authors WHERE id=$s1", [id])
        .then((data) => {
            if (data.rowCount == 0) {
                res.status(404).send("There is no Author matching this ID");
            } else {
                res.status(200).json(data.rows[0]);
            }
        })
        .catch((err) => res.status(500).json(err));
};
// ------ delete author controller ------//
export const deleteAuthor = (req, res) => {
    const { id } = req.params;
    pool
        .query("DELETE FROM authors WHERE id=$1", [id])
        .then((data) => {
            if (data.rowCount == 0) {
                res.status(404).send("There is no Author matching this ID");
            } else {
                res.status(200).send("The Author was successfully deleted!");
            }
        })
        .catch((err) => res.status(500).json(err));
};
// ------ create new author controller ------//
export const createNewAuthor = (req, res) => {
    const { first_name, last_name, initials, date_of_birth, gender, contact_details, details } = req.body;
    pool.query(
        "INSERT INTO authors (first_name, last_name, initials, date_of_birth, gender, contact_details, details) VALUES ($1, $2,$3, $4, $5,$6,$7) RETURNING *;",
        [
            first_name,
            last_name,
            initials,
            date_of_birth,
            gender,
            contact_details,
            details,
        ]
    )
        .then((data) => res.status(200).json(data.rows[0]))
    .catch((err)=> res.status(500).send("New Author couldnt get created"))
};
// ------ update author controller ------//
export const updateAuthor = (req, res) => {
  const {
    first_name,
    last_name,
    initials,
    date_of_birth,
    gender,
    contact_details,
    details,
  } = req.body;
  const { id } = req.params;
  pool
    .query(
      "UPDATE authors SET first_name=$1, last_name=$2, initials=$3, date_of_birth=$4, gender=$5, contact_details==$6, details==$7 RETURNING *;",
      [
        first_name,
        last_name,
        initials,
        date_of_birth,
        gender,
        contact_details,
        details,
      ]
    )
    .then((data) => {
      if (data.rowCount == 0) {
        res.status(404).send("There is no Author matching this ID");
      } else {
        res.status(200).json(data.rows[0]);
      }
    })
    .catch((err) => res.status(500).json(err));
};

// ------ get articles by author controller ------//
export const getArticlesByAuthor = (req, res) => {
    const { id } = req.params;
    pool
        .query("SELECT articles.id, articles.title, articles.author_id, articles.image_url, articles.short_description, articles.publishing_date, articles.tags, authors.first_name, authors.last_name, authors.details FROM authors JOIN articles ON authors.id = articles.authors.id WHERE authors.id=$1", [id]
        )
        .then((data) => res.status(200).json({ articles: data.rows }))
        .catch((err) => res.status(500).json(err));
};