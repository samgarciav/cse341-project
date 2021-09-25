//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();


const userArray = ['Erick', 'Abrahm', 'Sam'];

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    users: userArray,
    errorMessage: '',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

router.post('/add-user', (req, res, next) => {
  const newUser = req.body.newUser;
  let errorMessage = '';
  if (userArray.includes(newUser)) {
    errorMessage = 'User already exists';
  }
  else {
    userArray.push(req.body.newUser);
  }
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    users: userArray,
    errorMessage: errorMessage,
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS 
  });
});

router.post('/delete-user', (req, res, next) => {
  const userToDelete = req.body.userToDelete;
  let errorMessage = '';
  if (userArray.includes(userToDelete)) {
    const userIndex = userArray.indexOf(userToDelete);
    if (userIndex !== -1) {
      userArray.splice(userIndex, 1);
    }
  } else {
    errorMessage = 'User does not exist, verify the speeling';
  }
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    users: userArray,
    errorMessage: errorMessage,
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS 
  });
});






module.exports = router;
