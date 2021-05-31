const fs = require('fs');
const router = require('express').Router();
const db = require('../db/db.json');

router.get('/notes', (req, res) => {
   res.json(db);
});

router.post('/notes', ({body}, res) => {
   const {title, text} = body;
   const id = Math.floor(Math.random() * 100000);
   const newNote = {title, text, id};

   db.push(newNote);

   fs.writeFileSync('db/db.json', JSON.stringify(db));

   res.json(db);

});

router.delete('/notes/:id', (req, res) => {
   const id = req.params.id;
   
   const filteredResult = db.filter(() => {});

   fs.writeFileSync('db/db.json', JSON.stringify(filteredResult));
   
   res.json(filteredResult);
});

module.exports = router;