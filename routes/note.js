var models = require('../models');

exports.noteInfo = function(req, res) {
	var noteID = req.params.id;

	models.Note
		.find({"_id": noteID})
		.exec(afterQuery);

	function afterQuery(err, notes) {
		if(err) {
			console.log(err);
			res.sendStatus(500);
		} else {
			res.json(projects[0]);

		}
	}
}

exports.add = function(req, res) {
	var form_data = req.body;
	console.log(req.body.HobbsOut);

	var newNote = models.Note({
		'title': form_data['note_title'],
		'date': form_data['date'],
		'content': form_data['note_content'],
	});

	newNote.save(afterSave);

	function afterSave(err) {
		if(err) {
			console.log(err);
			res.sendStatus(500);
		} else {
			res.sendStatus(200);
		}
	}
}

exports.remove = function(req, res) {
	var noteID = req.params.id;

	models.Note
		.find({"_id": noteID})
		.remove()
		.exec(afterRemove);

	function afterRemove(err) {
		if(err) {
			console.log(err);
			res.sendStatus(500);
		} else {
			res.sendStatus(200);
		}
	}
}