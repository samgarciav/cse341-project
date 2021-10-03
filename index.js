const express = require('express');                            // brings express abalable
const bodyParser = require('body-parser');                     // brings the global module that enables reading data sent in posts
const path = require('path');                                  // place us in the Root direction of this project/folder
const PORT = process.env.PORT || 5000;                         // sets variable port so we can use it on the listen at the end
   
app = express();                                               // initiate express
app.use(bodyParser({ extended: true }))                        // we use the global module that enables reading data sent in posts
app.set('view engine', 'ejs');                                 // defines the templating engine we are going to use
app.set('views', path.join(__dirname, 'views'));               // where to find the dinamyc templating views 2nd parameter is the folder
app.use(express.static(path.join(__dirname, 'public')));       // we need this to be able to link our public folder for the links in our header
   
const routes = require('./routes');                            // brings in scope routes folder (takes index as default)
app.use(routes);                                               // everything in the url adress will be directed to routs folder


app.listen(PORT, () => console.log(`Listening on ${PORT}`));   // listen to the corresponding PORT