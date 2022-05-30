"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

const getSurveyResults = require('./modules/getSurveyResults');
const postSurveyResults = require('./modules/postSurveyResults');
const deleteSurveyResults = require('./modules/deleteSurveyResults');
const getUser = require('./modules/getUser');
const getJotForm = require('./modules/getJotForm');
const cloneJotForm = require('./modules/cloneJotForm');
const getActiveSurvey = require('./modules/getActiveSurvey');

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_DB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Mongoose is connected");
});

app.get("/test", (req, res) => {
  response.send("test request received");
});
app.get("/survey", getSurveyResults);
app.post("/survey", postSurveyResults);
app.delete("/survey/:id", deleteSurveyResults);
app.get("/user", getUser);
app.get("/jotform", getJotForm);
app.post("/jotform", cloneJotForm);
app.get('/active', getActiveSurvey);

app.listen(PORT, () => console.log("server is listening to port ", PORT));
