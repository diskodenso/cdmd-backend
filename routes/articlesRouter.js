// import Router
import { Router } from 'express';
//declare articlesRouter
const articlesRouter = Router();
// we want to accept get, post & put at the /api/articles route but first
// we need to pass this route throu our middleware in index.js