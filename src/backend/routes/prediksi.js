const router = require('express').Router();
const lcs = require('../algo/lcs');
const kmp = require('../algo/kmp');
const boyermoore = require('../algo/boyermoore');
const Penyakit = require('../model/penyakit.model');
const Prediksi = require('../model/prediksi.model');
const {dnaMatching} = require('../algo/regex');


router.route('/add').post((req, res) =>{
    const namaPasien = req.body.namaPasien;
    const penyakitPrediksi =  req.body.penyakitPrediksi;
    const dnaInput = req.body.dnaInput;
    const selectedAlgo = req.body.selectedAlgo;
    
    if (dnaMatching(dnaInput)){
        res.json('DNA input tidak valid').status(400);
        return;
    }
    Penyakit.find({penyakit : penyakitPrediksi}).then((r) => {
        if(r.length == 0){
            res.json('Penyakit tidak ditemukan').status(400);
            return;
        }else{
            if(selectedAlgo == 'Bayer-Moore'){
                var result = boyermoore(dnaInput,r[0].dnaString);
            }else if (selectedAlgo == 'KMP'){
                var result = kmp(dnaInput,r[0].dnaString);
            }
            
            if(result){
                var seratus = 100;
                console.log('masok');
                const newPrediksi = new Prediksi({
                    namaPasien: namaPasien,
                    penyakitPrediksi: penyakitPrediksi,
                    status: 'True',
                    tingkatKemiripan: seratus.toString()
                });
                newPrediksi.save()
                    .then(() => res.json(newPrediksi).status(200))
                    .catch(err => res.status(400).json('Error: ' + err));
            }else if (lcs(dnaInput,r[0].dnaString) >= 80){
                const newPrediksi = new Prediksi({
                    namaPasien: namaPasien,
                    penyakitPrediksi: penyakitPrediksi,
                    status: 'True',
                    tingkatKemiripan: lcs(dnaInput,r[0].dnaString).toString()
                });
                newPrediksi.save()
                    .then(() => res.json(newPrediksi).status(200))
                    .catch(err => res.status(400).json('Error: ' + err));
                
            }else{
                const newPrediksi = new Prediksi({
                    namaPasien: namaPasien,
                    penyakitPrediksi: penyakitPrediksi,
                    status: 'False',
                    tingkatKemiripan: lcs(dnaInput,r[0].dnaString).toString(),
                });
                newPrediksi.save()
                    .then(() => res.json(newPrediksi).status(200))
                    .catch(err => res.status(400).json('Error: ' + err));
            }
            return;
        }
    }).catch((err) => {
        res.status(400).json('Error: ' + err);
    });
});
module.exports = router;