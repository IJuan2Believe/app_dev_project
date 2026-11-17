const services = require('../services/app-service.js'); 

function getHome(req, res) {
    const user_info = services.getUserInfo(2); // set to the second user in database with no admin priv
    res.render('home', { user_info });
}

 function getCart (req, res) {
    const user_info = services.getUserInfo(1) ; 
    res.render('cart', { user_info });
};

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

function postRegister(req, res) {
    const { username, email, password } = req.body;
    const public_service = req.body.public_service === 'on';

    services.addUser(username, email, password, public_service);
    res.redirect('/');
     
}

 

function getInventory(req, res) {
    const collectibles = services.getAllCollectibles();
    const retroGames = services.getAllRetroGames();
    const items = [...collectibles, ...retroGames];

    res.render('inventory', { items });
}

function postAddToCart(req, res) {
    const { item_id, type } = req.body;
    services.addToCart(1, item_id, type);
}

module.exports = {
    getHome,
    getRetroGames,
    getCart,
    getCollectibles,
    getInventory,
    getProfile, 
    postRegister,
    postAddToCart
};