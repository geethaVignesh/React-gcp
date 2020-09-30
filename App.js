import React, { Component } from "react";
import "./App.css";
import AppEntity from './AddEntity';
import ImageUpload from './ImageUploads';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">GCP Traning POC</h1>
                </header>
                {/* <AppEntity/> */}
                <ImageUpload />
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default App;
