const express = require('express');                       // alway require express
const routes = express.Router();                          // this allows to exprot all routs at the same time

const teamRoutes = require('./teamRoutes');               // brings into scope the teamRouts Folder
const proveRoutes = require('./proveRoutes');

routes.use('/teamActivities', teamRoutes);                 // bringing all teamRouts (index by default) 1st parameter works as a filter or predifined adress in the url bar adress

/*or
routes.use('/teamAtivities', require('./teamRoutes'));     A shorter way to type it. Brings into scope the teamRouts Folder
*/


routes.get('/', (req, res, next) => {                     // (Main page) only slash "/" Always handle last
  res.render('pages/index', {
    title: 'Welcome to my CSE341 repo',
    path: '/',
  });
});

routes.use((req, res, next) => {                          // 404 page
  res.render('pages/404', {
    title: '404 - Page Not Found',
    path: req.url
  });
})

module.exports = routes;