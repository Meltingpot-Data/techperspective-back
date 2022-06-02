'use strict';

const Survey = require('./SurveyModel');

async function getActiveSurvey(req, res) {
    try {
        const activeSurvey = await Survey.find({ active: true });

        res.send(activeSurvey)
    } catch (err) {
        console.log(err)
    }
}

module.exports = getActiveSurvey;
