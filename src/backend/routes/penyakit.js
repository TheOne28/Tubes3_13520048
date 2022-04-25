const router = require('express').Router();
const {dnaMatching} = require('../algo/regex');
const Penyakit = require('../model/penyakit.model.js');

router.route('/add').post((req, res) => {
    const penyakit = req.body.penyakit;
    const dnaString = req.body.dnaString;

    if(!dnaMatching(dnaString)){
        const newPenyakit = new Penyakit({
            penyakit,
            dnaString,
        });

        newPenyakit.save().then((r) => {
            res.json('Penyakit added').status(200)
        }).catch((err) => {
            res.status(400).json('Error: ' + err);
        });
    }

    res.json('DNA Tidak valid').status(400);
});

module.exports = router;