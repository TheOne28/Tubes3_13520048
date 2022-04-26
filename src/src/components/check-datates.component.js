import React, { Component } from 'react';

export default class CheckDataTes extends Component {
    constructor(props) {
        super(props);

        this.onChangeNamaCheckQuery = this.onChangeNamaCheckQuery.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            checkquery: ''
        }
    }

    onChangeNamaCheckQuery(e){
        this.setState({
            checkquery: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const newCheckQuery = {
            checkquery: this.state.checkquery
        }

        console.log(newCheckQuery);

    }
    
    render() {
        return(
            <div>
                <h3>Cek Data Tes</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Masukkan Tanggal dan/atau Nama Penyakit:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.checkquery}
                            onChange={this.onChangeNamaCheckQuery}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Check Data Tes" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}