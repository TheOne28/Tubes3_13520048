import React, { Component } from 'react';
import axios from 'axios';
import Navbar from "./navbar.component";

const HasilPrediksi = props => (
    <tr>
      <td>{props.prediksi.tanggalPrediksi}</td>
      <td>{props.prediksi.namaPasien}</td>
      <td>{props.prediksi.penyakitPrediksi}</td>
      <td>{props.prediksi.tingkatKemiripan}</td>
      <td>{props.prediksi.status}</td>
    </tr>
  )

export default class CheckDataTes extends Component {
    constructor(props) {
        super(props);

        this.onChangeNamaCheckQuery = this.onChangeNamaCheckQuery.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            checkquery: '',
            hasil: [],
            sudahdicari: 0
        }
    }

    onChangeNamaCheckQuery(e){
        this.setState({
            checkquery: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        this.setState({
            sudahdicari: 0
        })

        const newCheckQuery = {
            query: this.state.checkquery
        }

        console.log(newCheckQuery);

        this.setState({
            hasil: []
        })

        var encodedQuery = encodeURIComponent(this.state.checkquery);
        axios.get('https://backendtubesstimabarokah.herokuapp.com/hasil/' + encodedQuery)
        .then(res => {
            if(typeof res.data != 'string'){
                this.setState({
                    hasil: res.data,
                })
            } 
        });

        this.setState({
            sudahdicari: 1
        })
    }
    
    hasilPrediksiList(){
        console.log(this.state.hasil);
        return this.state.hasil.map( (currentPrediksi) => {
            return <HasilPrediksi prediksi={currentPrediksi}/>;
        })
    }

    render() {
        return(
            <div>
            <Navbar />
            <div>
                <h3 className="title-page">Search for Tests</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group" id="xxx">
                        <label>Enter a date and/or disease name:</label>
                        <input type="text"
                            required
                            className="form-horizontal"
                            value={this.state.checkquery}
                            onChange={this.onChangeNamaCheckQuery}
                            />
                    </div>
                    <br/>
                    <div className="form-group" id="xx1">
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                </form>
                <br/>
            </div>
            <div>
            {this.state.sudahdicari > 0 &&
            <>
                {this.state.hasil.length < 1 &&
                    <h3>Tidak ditemukan data yang sesuai</h3>
                }
                {this.state.hasil.length > 0 &&
                    <div>
                    <h3>Hasil Prediksi</h3>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Tanggal Prediksi</th>
                                <th>Pasien</th>
                                <th>Penyakit</th>
                                <th>Similarity</th>
                                <th>Hasil Tes</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.hasilPrediksiList()}
                        </tbody>
                    </table>
                    </div>
                }
            </>
            }
            </div>
        </div>
        );
    }
}