const router = require('express').Router();
const Penyakit = require('../model/penyakit.model');
const Prediksi = require('../model/prediksi.model');

router.route('/add').post((req, res) =>{
    const namaPasien = req.body.namaPasien;
    const penyakitPrediksi =  req.body.penyakitPrediksi;
    const dnaInput = req.body.dnaInput;
    
    const dnaPenyakit = Penyakit.find({'penyakitPrediksi' : penyakitPrediksi});

    //Masih bingung find kalau gak nemu returnnya apa
    if(typeof dnaPenyakit === 'undefined'){
        res.json("Penyakit belum terdaftar").status(400);
        return;
    }

    // Ini belum manggil fungsi KMP atau BM
    if(dnaInput === dnaPenyakit){
        const newPrediksi = new Prediksi({
            namaPasien,
            penyakitPrediksi,
            status: true
        });

        newPrediksi.save().then((r) => {
            res.json('Prediksi added').status(200)
        }).catch((err) => {
            res.status(400).json('Error: ' + err);
        });
    }

    const newPrediksi = new Prediksi({
        namaPasien,
        penyakitPrediksi,
        status: false
    });

    newPrediksi.save().then((r) => {
        res.json('Prediksi added').status(200)
    }).catch((err) => {
        res.status(400).json('Error: ' + err);
    });

});

module.exports = router;