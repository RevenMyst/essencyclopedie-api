const express = require('express');

const router = express.Router();


const cardCtrl = require('../controllers/card')


router.get('/:id',cardCtrl.getCardById);



module.exports = router;