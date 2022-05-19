// import Router
import { Router } from 'express';
//declare articlesRouter
const articlesRouter = Router();
// we want to accept get, post & put at the /api/articles route (add method)
articlesRouter.route("/").get(getAllArticles)
// we need to pass this route throu our middleware in index.js
// export Router
export default usersRouter;
