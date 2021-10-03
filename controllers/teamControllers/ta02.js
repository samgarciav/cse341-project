const userArray = ['Erick', 'Abrahm', 'Sam'];

exports.getTa02 = (req, res, next) => {
  res.render('pages/teamPages/ta02', {
    title: 'Team Activity 02',
    users: userArray,
    errorMessage: '',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
}

exports.addUser = (req, res, next) => {
  const newUser = req.body.newUser;
  let errorMessage = '';
  if (userArray.includes(newUser)) {
    errorMessage = 'User already exists';
  }
  else {
    userArray.push(req.body.newUser);
  }
  res.render('pages/teamPages/ta02', {
    title: 'Team Activity 02',
    users: userArray,
    errorMessage: errorMessage,
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS 
  });
}

exports.deleteUser = (req, res, next) => {
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
  res.render('pages/teamPages/ta02', {
    title: 'Team Activity 02',
    users: userArray,
    errorMessage: errorMessage,
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS 
  });
}