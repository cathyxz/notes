var models = require('../models');

exports.view = function(req, res) {
	models.Note
		.find()
		.exec(renderNotes);
	function renderNotes(err, notes) {
		try {
			res.render('index', {notes: notes});
		}
		catch (e) {
			console.log(e);
		}
	}
};