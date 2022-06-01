'use strict';

const verifyUser = require('../auth');

function getUser(req, res, callbackFn) {
    verifyUser(req, (err, user) => {
        if (err) {
            res.send("Invalid Token");
        } else {
            callbackFn(req, res);
        }
    });
}

module.exports = getUser;