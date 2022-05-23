// import Router
import { Router } from 'express';
// import controllers
import { createNewAuthor, deleteAuthor, getAllAuthors, getArticlesByAuthor, getSingleAuthor, updateAuthor } from '../controllers/authorsController.js';


// declare router function
const authorsRouter = Router();

//1. get method at all authors route  - 2. create a new Author with post method
authorsRouter.route("/").get(getAllAuthors).post(createNewAuthor);
//1. get method on a query parameter to see single author -2 delete an specific author on the single route
// 3. update a specific author with put method on single route
authorsRouter.route("/:id").get(getSingleAuthor).delete(deleteAuthor).put(updateAuthor);
// get articles by author
authorsRouter.route("/:id/articles").get(getArticlesByAuthor);
// export Router
export default authorsRouter;