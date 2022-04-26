import React, { Component } from 'react';

export default class TesDNA extends Component {
    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangetxtPath = this.onChangetxtPath.bind(this);
        this.onChangePrediksiPenyakit = this.onChangePrediksiPenyakit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            txtpath: '',
            prediksipenyakit: ''
        }
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

    onSubmit(e){
        e.preventDefault();

        const newTesDNA = {
            username: this.state.username,
            txtpath: this.state.txtpath,
            prediksipenyakit: this.state.prediksipenyakit
        }

        console.log(newTesDNA);

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
                        <label>Prediksi Penyakit</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.prediksipenyakit}
                            onChange={this.onChangePrediksiPenyakit}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Tes DNA" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}