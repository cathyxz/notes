var express = require('express');
var router = express.Router();
var index = require('./routes/index');
var note = require('./routes/note');

router.get('/', index.view);
router.get('/note/:id', note.noteInfo);
router.post('/note/new', note.add);
router.post('/note/:id/delete', note.remove);

module.exports = router;