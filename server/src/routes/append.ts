import express from 'express';
import {getBrands} from "../controllers/brand";
import {
    getBodies, getDrives, getEngines, getGearboxes,
    getGenerations,
    getModels, getModifications,
    getYears


} from "../controllers/model";

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