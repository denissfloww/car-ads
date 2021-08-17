import express from "express";
import multer from "multer";
import middleware from "../middleware";
import storageConfig from "../utils/multerConfig";
import {getImageTest, saveAd} from "../controllers/add";

const router = express.Router();


var upload = multer({storage: storageConfig})
const { auth } = middleware;

router.post('/upload', upload.array('images', 5), auth, saveAd);

router.get('/test', getImageTest)

export default router;
