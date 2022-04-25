const router = require('express').Router();
const {matchPenyakit, matchTanggal} = require('../algo/regex');
const Prediksi = require('../model/prediksi.model');

router.route('/').get((req, res) =>{
    const query = req.body.query;

    const tanggalPrediksi = matchTanggal(query);
    const penyakitPrediksi = matchPenyakit(query);

    
    if(tanggalPrediksi === null && penyakitPrediksi === null){
        res.json('Query input tidak valid').status(400);
    }
    
    var allPrediksi;
    if(tanggalPrediksi === null){
        allPrediksi = Prediksi.find({
            'penyakitPrediksi' : penyakitPrediksi[0]
        });
    }
    else if(penyakitPrediksi === null){
        allPrediksi = Prediksi.find({
            'tanggalPrediksi' : {
                $dateFromString:{
                    dateString: tanggalPrediksi[0],
                }
            }
        });
    }else{
        allPrediksi = Prediksi.find({
            'penyakitPrediksi' : penyakitPrediksi[0],
            'tanggalPrediksi' : {
                $dateFromString:{
                    dateString: tanggalPrediksi[0],
                }
            }
        });
    }

    res.send(allPrediksi).status(200).json('Prediksi ditemukan');
});

module.exports = router;