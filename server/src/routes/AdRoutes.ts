import express from "express";
import multer from "multer";
import middleware from "../middleware";
import storageConfig from "../utils/multerConfig";
import { getImageTest, getUserAds, saveAd } from "../controllers/AdController";

const router = express.Router();

router.get('/image/:imageName', getImageTest)
router.get("/ads/:userId", getUserAds)

var upload = multer({ storage: storageConfig });
const { auth } = middleware;

router.post('/upload', upload.array('images', 5), auth, saveAd);

export default router;