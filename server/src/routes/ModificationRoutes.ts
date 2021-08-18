import express from 'express';
import multer from "multer";
import { saveAd } from "../controllers/AdController";
import {getBrands} from "../controllers/BrandController";
import { getModels } from '../controllers/ModelController';
import {
    getBodies, getDrives, getEngines, getGearboxes,
    getGenerations,
    getModifications,
    getYears
} from "../controllers/ModificationController";


const router = express.Router();

router.get('/brands', getBrands);
router.get('/models', getModels)
router.get('/years', getYears)
router.get('/bodies', getBodies)
router.get('/generations', getGenerations)
router.get('/engines', getEngines)
router.get('/drives', getDrives)
router.get('/gearboxes', getGearboxes)
router.get('/modifications', getModifications)


export default router;