'use strict';

const Survey = require('./SurveyModel');
const axios = require('axios');
const verifyUser = require('../auth');

async function getActiveSurvey(req, res) {
    try {
        const apiKey = process.env.JOTFORM_API;
        const activeSurvey = await Survey.find({ active: true });

        res.send(activeSurvey)
    } catch(err) {
        console.log(err)
    }
}

module.exports = getActiveSurvey;