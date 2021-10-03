const express = require('express');                       // alway require express
const routes = express.Router();                          // this allows to exprot all routs at the same time

routes.use('/ta01', require('./ta01'));                  // in this Index we redirect or bring the ta03 WHEN the adress bar (is filtered
routes.use('/ta02', require('./ta02'));
routes.use('/ta03', require('./ta03'));


routes.use('/', (req, res, next) => {                   // And again the default trigger withing the filter /teamActivities) if nothing else is passed in the adress bar
  console.log("En el index de teamRouts",
  req.url);
});   

module.exports = routes;