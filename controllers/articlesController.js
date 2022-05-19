// import pool
import pool from "../db/pg.js";

// we have to export every controller seperately
// each route need a controller

// ------ get all articles controller ------//
export const getAllArticles = (req, res) => {
    pool
        //SQL SELECT * FROM user - select all data from users table
        .query("SELECT * FROM aricles")
        .then((data) => res.status(200).json({ articles: data.rows }))
        .catch((err) => res.status(500).json(err));
};

// ------ get single articles controller ------//
