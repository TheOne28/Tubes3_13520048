const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const penyakitSchema = new Schema({
    penyakit: {
        type: String,
        required: true,
        unique: true,
    },
    dnaString: {
        type: String,
        required:true,
    }, 
},{
    timestamps: true,
});


const Penyakit = mongoose.model('Penyakit', penyakitSchema);

module.exports = Penyakit;