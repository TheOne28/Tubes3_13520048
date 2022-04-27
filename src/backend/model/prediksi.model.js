const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Double = mongoose.Schema.Types.Decimal128;

const prediksiSchema = new Schema({
    tanggalPrediksi: {
        type: String,
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
    },
    tingkatKemiripan: {
        type: String,
        required: true

    }
},{
    timestamps: true,
});


const Prediksi = mongoose.model('Prediksi', prediksiSchema);

module.exports = Prediksi;