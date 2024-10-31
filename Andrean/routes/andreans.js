var express = require('express');
var router = express.Router();

const AndreanController = require('../controller/andrean');
const andrean = require('../model/andrean');

router.post('/', AndreanController.createAndrean);

module.exports = router;

//https://github.com/AndreanTjen/UTS_PAW2_Andrean.git