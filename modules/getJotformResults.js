'use strict';

// RETREIVES RESULTS FROM JOTFORM
const axios = require('axios');

async function getJotformResults(req, res) {
  let url = `https://api.jotform.com/form/${req.params.id}/submissions?apiKey=${process.env.JOTFORM_API}`
  const survey = await axios.get(url);
  console.log(survey);
}

module.exports = getJotformResults;
