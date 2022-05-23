// import Router
import { Router } from 'express';
// import controllers
import { createNewArticle, deleteArticle, getAllArticles, getSingleArticle, updateArticle } from '../controllers/articlesController.js';
//declare articlesRouter
const articlesRouter = Router();
// we want to accept get, post at the /api/articles route (add method)
articlesRouter.route("/").get(getAllArticles).post(createNewArticle);
// at the /api/users/:id route we want to accept get, put & delete (add the method and pass in the matching controller)
articlesRouter.route("/:id").get(getSingleArticle).put(updateArticle).delete(deleteArticle);
// export Router
export default articlesRouter;
