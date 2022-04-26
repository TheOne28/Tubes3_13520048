import React, { Component } from 'react';

export default class CreatePenyakit extends Component {
    constructor(props) {
        super(props);

        this.onChangeNamaPenyakit = this.onChangeNamaPenyakit.bind(this);
        this.onChangetxtPath = this.onChangetxtPath.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            namapenyakit: '',
            txtpath: ''
        }
    }

    onChangeNamaPenyakit(e){
        this.setState({
            namapenyakit: e.target.value
        })
    }

    onChangetxtPath(e){
        this.setState({
            txtpath: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const newPenyakit = {
            namapenyakit: this.state.namapenyakit,
            txtpath: this.state.txtpath
        }

        console.log(newPenyakit);

    }
    
    render() {
        return(
            <div>
                <h3>Tambahkan Penyakit</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nama Penyakit:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.namapenyakit}
                            onChange={this.onChangeNamaPenyakit}
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
                        <input type="submit" value="Create Penyakit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}