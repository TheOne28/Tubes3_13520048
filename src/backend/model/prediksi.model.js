const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const prediksiSchema = new Schema({
    tanggalPrediksi: {
        type: Date,
        required: true
    },
    namaPasien: {
        type: String,
        required: true
    }, 
    penyakitPrediksi: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required : true
    }
},{
    timestamps: true,
});

const Prediksi = mongoose.model('Prediksi', prediksiSchema);

module.exports = Prediksi;