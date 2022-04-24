const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
    useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB succesfully connected");
})

app.use(cors());
app.use(express.json());

const hasilRouter = require('./routes/hasilPrediksi');
const penyakitRouter = require('./routes/penyakit');
const prediksiRouter = require('./routes/prediksi');

app.use('/hasil', hasilRouter);
app.use('/penyakit', penyakitRouter);
app.use('/prediksi', prediksiRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port} `);
});