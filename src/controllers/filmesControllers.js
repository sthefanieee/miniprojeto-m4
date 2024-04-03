
const filmesModel = require('../model/filmesModel');

exports.getFilmesEmpoderamento = (req, res) => {
  res.json(filmesModel);
};
