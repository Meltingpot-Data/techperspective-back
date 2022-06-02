'use strict';

// RETREIVES RESULTS FROM JOTFORM
const axios = require('axios');

async function getJotformResults(req, res) {
  let url = `https://api.jotform.com/form/${req.params.id}/submissions?apiKey=${process.env.JOTFORM_API}`
  const survey = await axios.get(url);
  const jotFormSubmissionData = survey.data.content;  
  // console.log(jotFormSubmissionData);
  const results = jotFormSubmissionData.map((contentItem) => {
    let answers = contentItem.answers
    return Object.keys(answers).reduce((acc, current) => {
        // remember current is just a key, acc starts at 0 and we increment if the answer is true.
        if(answers[current].answer === 'TRUE') {
           acc++
        }
        return acc
     }, 0)
 })

  const data = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  results.forEach(num => {
    data[num-1]++;
  })
  
 
  res.send(data);
}

module.exports = getJotformResults;
