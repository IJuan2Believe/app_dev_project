const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middleware/app-middleware.js');
const controller = require('../controllers/app-controller.js');

router.get('/', controller.getHome);
router.get('/RetroGames', controller.getRetroGames);
router.get('/Cart', controller.getCart);
router.get('/Collectibles', controller.getCollectibles);



router.get('/Inventory', isAdmin, controller.getInventory);
router.get('/profile', controller.getProfile);

module.exports = router;
 