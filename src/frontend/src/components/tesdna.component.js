import React, { Component } from 'react';
import axios from 'axios';

export default class TesDNA extends Component {
    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePrediksiPenyakit = this.onChangePrediksiPenyakit.bind(this);
        this.onChangePilihanTes = this.onChangePilihanTes.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.userInput = React.createRef();

        this.state = {
            username: '',
            prediksipenyakit: '',
            pilihantes: 'KMP',
            jenistes: [],
            selectedFile: '',
            selectedFileContent: '',
            hasil_date: '',
            hasil_username: '',
            hasil_penyakit: '',
            hasil_similarity: '',
            hasil_tnf: ''
        }
    }

    componentDidMount() {
        this.setState({
            jenistes: ['KMP', 'Bayer-Moore']
        })
    }

    onChangeUserName(e){
        this.setState({
            username: e.target.value
        })
    }

    onChangeFile(e){
        this.setState({
            selectedFile: e.target.value
        })
    }

    onChangePrediksiPenyakit(e){
        this.setState({
            prediksipenyakit: e.target.value
        })
    }

    onChangePilihanTes(e){
        this.setState({
            pilihantes: e.target.value
        })
    }

    handleFileChange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            this.setState({
                selectedFile: file.name,
                selectedFileContent: reader.result
            })
        }
        reader.onerror = () => {
            console.log('file error', reader.error)
        }
    }

    onSubmit(e){
        e.preventDefault();

        const newTesDNA = {
            namaPasien: this.state.username,
            dnaInput: this.state.selectedFileContent,
            penyakitPrediksi: this.state.prediksipenyakit,
            selectedAlgo: this.state.pilihantes
        }
        axios.post('http://localhost:3001/prediksi/add', newTesDNA)
        .then(res => 
            this.setState({
                hasil_date: res.data.tanggalPrediksi,
                hasil_username: this.state.username,
                hasil_penyakit: this.state.prediksipenyakit,
                hasil_similarity: res.data.tingkatKemiripan,
                hasil_tnf: res.data.status
            })
        );
        console.log(this.state.hasil_similarity);
        console.log(newTesDNA);

        //window.location = '/';

    }
    
    render() {
        return(
            <div>
                <h3>Tes DNA</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nama Pengguna:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUserName}
                            />
                    </div>
                    <div className="form-group">
                        <label>Sequence DNA:</label>
                        <input type="file" 
                            required
                            className="form-control"
                            onChange={this.handleFileChange}/>
                    </div>
                    <div className="form-group">
                        <label>Prediksi Penyakit:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.prediksipenyakit}
                            onChange={this.onChangePrediksiPenyakit}
                            />
                    </div>
                    <div className="form-group">
                        <label>Pilihan Jenis Tes:</label>
                        <select ref={this.userInput}
                            required
                            className="form-control"
                            value={this.state.pilihantes}
                            onChange={this.onChangePilihanTes}>
                            {
                                this.state.jenistes.map(function(user){
                                    return <option
                                        key={user}
                                        value={user}>
                                        {user}
                                        </option>
                                }
                                )
                            }
                        </select>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                </form>
                <br/>
                <h3>Hasil Tes</h3>
                <p>Tanggal    : {this.state.hasil_date}</p>
                <p>Pengguna   : {this.state.hasil_username}</p>
                <p>Penyakit   : {this.state.hasil_penyakit}</p>
                <p>Similarity : {this.state.hasil_similarity}</p>
                <p>True/False : {this.state.hasil_tnf}</p>
                
            </div>
        );
    }
}