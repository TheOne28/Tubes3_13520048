const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Double = mongoose.Schema.Types.Decimal128;

const prediksiSchema = new Schema({
    tanggalPrediksi: {
        type: Date,
        default: Date.now,
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
        type: Double,
        required: true

    }
},{
    timestamps: true,
});

const Prediksi = mongoose.model('Prediksi', prediksiSchema);

module.exports = Prediksi;