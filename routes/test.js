const express = require('express');
const router = express.Router();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('data/data.json')
const db = low(adapter)


let data = db.get('list')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(data);
});

router.post('/post', function(req, res, next) {
    let id = parseInt(req.body.id);
    let name = req.body.name

    db.get('list').push({
        id:id,
        name:name
    })
    .write()

    res.redirect('/')

});

router.post('/delete',function(req,res,next){

    let id = parseInt(req.body.id)

    db.get('list').remove({id:id}).write()
    res.send('File deleted')
})

module.exports = router;

