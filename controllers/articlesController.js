// import pool
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
    pool.query("SELECT*FROM articles WHERE id=$1", [id])
}