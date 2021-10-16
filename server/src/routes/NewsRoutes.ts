import express from 'express';
import {getAllNews} from "../controllers/NewsController";
const router = express.Router();

router.get('/', getAllNews);



export default router;