import express from 'express';
import generateURLId from "../controllers/generateUrlID.js";
import redirectToUrl from "../controllers/redirectToUrl.js";
const router = express.Router();

router.post('/', generateURLId);
router.get('/:urlId', redirectToUrl);

export default router;