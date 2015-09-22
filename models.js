var Mongoose = require('mongoose');

var NoteSchema = new Mongoose.Schema({
	"title": String,
	"date": Date,
	"content": String,
});

exports.Note = Mongoose.model('Note', NoteSchema);