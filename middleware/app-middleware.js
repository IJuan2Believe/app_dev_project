const services = require('../services/app-service.js');

function isAdmin(req, res, next) {
    const user = services.getUserInfo(2); // hardcoded for now 

    if (!user || user.is_manager !== true) {
        return res.status(403).send('Error: you are not admin');
    }
    next();
}

module.exports = { isAdmin };