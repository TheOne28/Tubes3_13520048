const router = require('express').Router();
const {matchPenyakit, matchTanggal} = require('../algo/regex');
const Prediksi = require('../model/prediksi.model');

router.route('/:query').get((req, res) =>{
    const query = decodeURIComponent(req.params.query);
    const tanggalPrediksi = matchTanggal(query);
    const penyakitPrediksi = matchPenyakit(query);


    if(tanggalPrediksi === null && penyakitPrediksi === null){
        res.json('Query input tidak valid').status(400);
        return;
    }
    
    if(tanggalPrediksi === null){
        const namaPenyakit = penyakitPrediksi[0].charAt(0).toUpperCase() + penyakitPrediksi[0].slice(1).toLowerCase();
        Prediksi.find({
            'penyakitPrediksi' : namaPenyakit
        }, function(err, docs){
            if(docs.length == 0){
                res.json("Tidak ada yang sesuai!!").status(400);
            }else{
                res.send(docs).status(200);
            }
            
        });
    }
    else if(penyakitPrediksi === null){
        Prediksi.find({
            'tanggalPrediksi' : tanggalPrediksi
        }, function(err, docs){
            if(docs.length == 0){
                res.json("Tidak ada yang sesuai!!").status(400);
            }else{
                res.send(docs).status(200);
            }
        });
    }else{
        const penyakitLength = penyakitPrediksi[0].length;
        Prediksi.find({
            'penyakitPrediksi' : penyakitPrediksi[0].substring(1, penyakitLength).charAt(0).toUpperCase() + penyakitPrediksi[0].substring(1, penyakitLength).slice(1).toLowerCase(),
            'tanggalPrediksi' : tanggalPrediksi,
            }
        , function(err, docs){
            if(docs.length == 0){
                res.json("Tidak ada yang sesuai!!").status(400);
            }else{
                res.send(docs).status(200);
            }
        });
    }
});

module.exports = router;