import React, { Component } from 'react';

export default class TesDNA extends Component {
    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangetxtPath = this.onChangetxtPath.bind(this);
        this.onChangePrediksiPenyakit = this.onChangePrediksiPenyakit.bind(this);
        this.onChangePilihanTes = this.onChangePilihanTes.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.userInput = React.createRef();

        this.state = {
            username: '',
            txtpath: '',
            prediksipenyakit: '',
            pilihantes: 'KMP',
            jenistes: [],
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

    onChangetxtPath(e){
        this.setState({
            txtpath: e.target.value
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

    onSubmit(e){
        e.preventDefault();

        const newTesDNA = {
            username: this.state.username,
            txtpath: this.state.txtpath,
            prediksipenyakit: this.state.prediksipenyakit,
            pilihantes: this.state.pilihantes
        }

        this.setState({
            hasil_date: 1,
            hasil_username: this.state.username,
            hasil_penyakit: this.state.prediksipenyakit,
            hasil_similarity: 100,
            hasil_tnf: 'True'
        })

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
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.txtpath}
                            onChange={this.onChangetxtPath}
                            />
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