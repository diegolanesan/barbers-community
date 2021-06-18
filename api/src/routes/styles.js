const { Router } = require('express');
const router = Router();
const {getAllFaceTypes,getAllHairTypes,getAllStyles} = require('../controllers/typesHFS');

router.get('/Face', getAllFaceTypes);
router.get('/Hair', getAllHairTypes);
router.put('/Styles', getAllStyles);

module.exports = router;