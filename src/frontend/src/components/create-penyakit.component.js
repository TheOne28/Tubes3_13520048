import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePenyakit extends Component {
    constructor(props) {
        super(props);

        this.onChangeNamaPenyakit = this.onChangeNamaPenyakit.bind(this);
        this.onChangetxtPath = this.onChangetxtPath.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            namapenyakit: '',
            txtpath: '',
            hasil: ''
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
            penyakit: this.state.namapenyakit,
            dnaString: this.state.txtpath
        }

        this.setState({
            hasil: 'Penyakit berhasil ditambahkan.'
        })

        console.log(newPenyakit);

        
        axios.post('http://localhost:3001/penyakit/add', newPenyakit)
        .then(res => console.log(res.data));
        //window.location = '/';

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
                        <input type="file" 
                            required
                            className="form-control"
                            value={this.state.txtpath}
                            onChange={this.onChangetxtPath}/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                </form>
                <br/>
                <h2>{this.state.hasil}</h2>
            </div>
        );
    }
}