var router = require('express').Router();
var controller = require('../controller/controller');

router.get('/', controller.renderIndex);


module.exports = router;
