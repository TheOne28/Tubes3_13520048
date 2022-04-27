const router = require('express').Router();
const {dnaMatching} = require('../algo/regex');
const Penyakit = require('../model/penyakit.model.js');

router.route('/add').post((req, res) => {
    const penyakit = req.body.penyakit.charAt(0).toUpperCase() + req.body.penyakit.slice(1).toLowerCase();
    const dnaString = req.body.dnaString;

    if (dnaString.length == 0) {
        res.json('DNA input kosong').status(400);
        return;
    }
    Penyakit.find({penyakit: penyakit}).then((r) => {
        if(r.length != 0){
            res.json('Penyakit sudah ada!').status(400);
            return;
        }
        else {
            if(!dnaMatching(dnaString)){
                const newPenyakit = new Penyakit({
                    penyakit,
                    dnaString,
                });
                newPenyakit.save().then((r) => {
                    res.json('Penyakit added').status(200)
                }).catch((err) => {
                    res.json('Error: ' + err).status(400);
                });
                return;
            }
            res.json('DNA input tidak valid').status(400);
        }
    })
});

module.exports = router;