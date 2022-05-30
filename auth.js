'use strict';

// JSON Web token — JWT (pronounced JOT)
const jwt = require('jsonwebtoken');
// jwks — JSON web key set (pronounced ja-wicks)
const jwksClient = require('jwks-rsa');


const client = jwksClient({
    jwksUri: process.env.JWKS_URI
});

function getKey(header, callback){
    client.getSigningKey(header.kid, function(err, key) {
        var signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    });
}

function verifyUser (req, errorFirstOrUserCallbackFunction) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, getKey, {}, errorFirstOrUserCallbackFunction);
    } catch (error) {
        errorFirstOrUserCallbackFunction('Not authorized');
    }
}

module.exports = verifyUser