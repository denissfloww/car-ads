import express from 'express';
import {getAllBrands} from "../controllers/brand";
import {getModelByBrand} from "../controllers/model";

const router = express.Router();

router.get('/brands', getAllBrands);
router.get('/models/:brandId', getModelByBrand)

export default router;