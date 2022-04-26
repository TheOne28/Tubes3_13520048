const router = require('express').Router();
const lcs = require('../algo/lcs');
const kmp = require('../algo/kmp');
const boyermoore = require('../algo/boyermoore');
const Penyakit = require('../model/penyakit.model');
const Prediksi = require('../model/prediksi.model');
const fileParser = require('../algo/fileParser');
const {dnaMatching} = require('../algo/regex');


router.route('/add').post((req, res) =>{
    const namaPasien = req.body.namaPasien;
    const penyakitPrediksi =  req.body.penyakitPrediksi;
    const dnaInputPath = req.body.dnaInputPath;
    const dnaInput = fileParser(dnaInputPath)[0];   // file path masih belum tau lengkapnya
    const selectedAlgo = req.body.selectedAlgo;
    
    if (dnaMatching(dnaInput)){
        res.json('DNA input tidak valid').status(400);
    }
    Penyakit.find({penyakit : penyakitPrediksi}).then((r) => {
        if(r.length == 0){
            res.json('Penyakit tidak ditemukan');
        }else{
            if(selectedAlgo == 'boyermoore'){
                var result = boyermoore(dnaInput,r[0].dnaString);
            }else if (selectedAlgo == 'kmp'){
                var result = kmp(dnaInput,r[0].dnaString);
            }if(result){
                const newPrediksi = new Prediksi({
                    namaPasien: namaPasien,
                    penyakitPrediksi: penyakitPrediksi,
                    status: 'True',
                    tingkatKemiripan: 100
                });
                newPrediksi.save()
                    .then(() => res.json(newPrediksi))
                    .catch(err => res.status(400).json('Error: ' + err));
            }else if (lcs(dnaInput,r[0].dnaString) >= 80){
                const newPrediksi = new Prediksi({
                    namaPasien: namaPasien,
                    penyakitPrediksi: penyakitPrediksi,
                    status: 'True',
                    tingkatKemiripan: lcs(dnaInput,r[0].dnaString)
                });
                newPrediksi.save()
                    .then(() => res.json(newPrediksi))
                    .catch(err => res.status(400).json('Error: ' + err));
            }else{
                const newPrediksi = new Prediksi({
                    namaPasien: namaPasien,
                    penyakitPrediksi: penyakitPrediksi,
                    status: 'False',
                    tingkatKemiripan: lcs(dnaInput,r[0].dnaString)
                });
                newPrediksi.save()
                    .then(() => res.json(newPrediksi))
                    .catch(err => res.status(400).json('Error: ' + err));
            }
        }
    }).catch((err) => {
        res.status(400).json('Error: ' + err);
    });
});
module.exports = router;