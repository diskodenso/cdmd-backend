// import Router
import { Router } from 'express';
// import controllers
import { getAllArticles, getSingleArticle } from '../controllers/articlesController.js';
//declare articlesRouter
const articlesRouter = Router();
// we want to accept get, post & put at the /api/articles route (add method)
articlesRouter.route("/").get(getAllArticles);
// at the /api/users/:id route we want to accept get, put & delete (add the method and pass in the matching controller)
articlesRouter.route("/:id").get(getSingleArticle);
// export Router
export default articlesRouter;
