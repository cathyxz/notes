var models = require('../models');

exports.view = function(req, res) {
	models.Note
		.find()
		.exec(renderNotes);
	function renderNotes(err, notes) {
		res.render('index', {'notes': notes});
		console.log('I rendered shit');
	}
};