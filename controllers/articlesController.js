// import pool
import res from "express/lib/response";
import pool from "../db/pg.js";

// we have to export every controller seperately
// each route need a controller

// ------ get all articles controller ------//
export const getAllArticles = (req, res) => {
    // console.log("here");
    pool

    //     //SQL SELECT * FROM user - select all data from users table
    .query("SELECT * FROM articles")
    .then((data) => res.status(200).json({ articles: data.rows }))
    .catch((err) => res.status(500).json(err));
};

// ------ get single articles controller ------//
export const getSingleArticle = (req, res) => {
  const { id } = req.params;
  pool
    .query("SELECT*FROM articles WHERE id=$1", [id])
    .then((data) => {
      // if article id is not existing we send error message
      if (data.rowCount == 0) {
        res.status(404).send("There is not article matching this id!");
      } else {
        res.status(202).json(data.rows[0]);
      }
    })
    .catch((err) => res.status(500).json(err));
};
// ------ create new articles controller ------//
export const createNewArticle = (req, res) => {
  const { title, image_url, short_description, location, publishing_date, tags } = req.body;
  pool.query(
    "INSERT INTO articles (title, image_url, short_description, location, publishing_date, tags) VALUES ($1, $2,$3, $4, $5,$6,$7) RETURNING *;",
    [title, image_url, short_description, description, location, publishing_date, tags]
  )
    .then((data) => res.status(200).json(data.rows[0]))
  .catch ((err) => res.status(500).json(err));
};
// ------ delete articles controller ------//
export const deleteArticle = (req, res) => {
  const { id } = req.params;
  pool
    .query("DELETE FROM articles WHERE id=$1", [id])
    .then((data) => {
      if (data.rows.length == 0) {
        res.status(404).send("There is no article matching this ID");
        res.status(200).send("Articles successfully deleted!");
      }
    })
    .catch((err) => res.status(500).json(err));
};
// ------ update articles controller ------//
export const updateArticle = (req, res) => {
  const {id} = req.params;
  const { title, image_url, short_description, description, location, publishing_date, tags } = req.body;
  pool
    .query("UPDATE articles SET title=$1, image_url=$2, short_description=$3, description=$4, location=$5, publishing_date=$6, tags=$7, id=$8 RETURNING *;", [title, image_url, short_description, description, location, publishing_date, tags, id]
    )
    .then((data) => {
      if (data.rowCount == 0) {
        res.status(404).send("There is no article matching this ID")
      } else {
        res.status(200).json(data.rows[0]);
      }
    })
    .catch((err) => res.status(500).json(err));
};