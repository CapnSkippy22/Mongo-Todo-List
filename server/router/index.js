const router = require('express').Router();

const { photoCtrl } = require('../controllers/photoController');

router.route('/photo')
  .get(photoCtrl.GET)
  .post(photoCtrl.POST);

module.exports.router = router;