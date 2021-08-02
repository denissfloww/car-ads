import express from "express";
import multer from "multer";
import storageConfig from "../utils/multerConfig";
import { saveAd } from "../controllers/add";

const router = express.Router();


var upload = multer({storage: storageConfig})

router.post('/upload', upload.array('image', 5), saveAd);

export default router;