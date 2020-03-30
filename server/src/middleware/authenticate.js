const {User} = require('./../models/User');

var authenticate = async (req, res, next) => {
    var token = req.header('x-auth');

    try {
        var user = await User.findByToken(token);
        if (!user) {
            res.status(404).send('user not found'); // this will stop findByToken function executing and jump to catch block down below
        }
        req.user = user;
        req.token = token;
        next();
    } catch(e) {
        res.status(401).send(e);
    }
};

module.exports = {authenticate}