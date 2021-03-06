import React, { Component } from 'react';
import axios from 'axios';
import Navbar from "./navbar.component";

export default class CreatePenyakit extends Component {
    constructor(props) {
        super(props);

        this.onChangeNamaPenyakit = this.onChangeNamaPenyakit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            namapenyakit: '',
            selectedFile: '',
            selectedFileContent: '',
            hasil: '',
        }
    }

    onChangeNamaPenyakit(e){
        this.setState({
            namapenyakit: e.target.value
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

        const newPenyakit = {
            penyakit: this.state.namapenyakit,
            dnaString: this.state.selectedFileContent,
        }
        
        axios.post('http://localhost:3001/penyakit/add', newPenyakit)
        .then(res => 
            this.setState({
                hasil: res.data
            })
        );

        console.log(newPenyakit);

        //window.location = '/';

    }
    
    render() {
        return(
            <div>
                <Navbar />
                <h3 className="title-page">Upload New Disease DNA</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Disease Name:</label>
                        <input type="text"
                            required
                            className="form-horizontal"
                            value={this.state.namapenyakit}
                            onChange={this.onChangeNamaPenyakit}
                            />
                    </div>
                    <div className="form-group">
                        <label>DNA Sequence:</label>
                        <input type="file" 
                            required
                            className="form-horizontal"
                            onChange={this.handleFileChange}/>
                            {/* // value={this.state.selectedFile}/> */}
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