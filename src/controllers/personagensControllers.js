
const personagensModel = require('../model/personagensModel');

exports.getPersonagensIconicas = (req, res) => {
  res.json(personagensModel);
};