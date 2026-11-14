const express = require('express');
const router = express.Router();

router.get("/", ( req, res) => {
    res.render(`home`);
});

router.get("/RetroGames", ( req, res) => {
    res.render(`retro-games`);
});

router.get("/Cart", ( req, res) => {
    res.render(`cart`);
});

router.get("/Collectibles", ( req, res) => {
    res.render(`collectibles`);
});

 router.get("/Inventory", ( req, res) => {
    res.render(`inventory`);
});

 

module.exports = router;