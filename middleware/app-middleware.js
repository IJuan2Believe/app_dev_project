const services = require('../services/app-service.js');

function isAdmin(req, res, next) {
    const user = services.getUserInfo(1); // hardcoded for now 
    /* it's set to the john doe object, if you change to getUserInfo(1) it will let you pass the middleware authentification  */

    if (!user || user.is_manager !== true) {
        return res.status(403).send('Error: you are not admin');
    }
    next();
}

module.exports = { isAdmin };