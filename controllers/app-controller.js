const services = require('../services/app-service.js'); 

function getHome(req, res) {
    const user_info = services.getUserInfo(1);
    res.render('home', { user_info });
}

 

function getCart(req, res) {
    res.render('cart');
}


function getInventory(req, res) {
    res.render('inventory');
}

function getProfile(req, res) {
    res.render('profile');
}

function getCollectibles(req, res) {
    const items = services.getAllCollectibles();
    res.render('collectibles', { items });
} 

 function getRetroGames(req, res) {
    const items = services.getAllRetroGames(); 
    res.render('retro-games' , {items});
}

module.exports = {
    getHome,
    getRetroGames,
    getCart,
    getCollectibles,
    getInventory,
    getProfile
};