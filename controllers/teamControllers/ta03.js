const data = require('../../models/teamModels/ta03');

exports.getTa03 = (req, res, nex) => {
  data.processJson();
  console.log(data.processJson());
  /* res.render('pages/teamPages/ta03', {
    title: 'Team Activity 03',
    data: datas,
    path: "/ta03",
    errorMessage: ""
  }); */
}
