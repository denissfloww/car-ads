import express from "express";
import multer from "multer";
import middleware from "../middleware";
import storageConfig from "../utils/multerConfig";
import {
  checkAlreadyInUserFavouriteAd,
  deleteFavouriteUserAd,
  getAdById,
  getAds,
  getImage,
  getUserAds, getUserFavouriteAds, insertFavouriteUserAd, insertCompareUserAd,
  saveAd, deleteCompareUserAd, getUserCompareAds, checkAlreadyInUserCompareAd
} from "../controllers/AdController";

const router = express.Router();

router.get("/favourite", getUserFavouriteAds)
router.get("/compare", getUserCompareAds)
router.get("/compare/check", checkAlreadyInUserCompareAd)
router.get("/favourite/check", checkAlreadyInUserFavouriteAd)
router.get("/ads", getAds);
router.get("/image/:imageName", getImage);
router.get("/ads/:userId", getUserAds);
router.get("/:adId", getAdById)



router.post("/compare/insert", insertCompareUserAd)
router.delete("/compare/delete/:id", deleteCompareUserAd)


var upload = multer({ storage: storageConfig });
const { auth } = middleware;

router.post("/favourite/insert", auth, insertFavouriteUserAd)
router.delete("/favourite/delete/:id", auth, deleteFavouriteUserAd)

router.post("/upload", upload.array("images", 5), auth, saveAd);


export default router;
