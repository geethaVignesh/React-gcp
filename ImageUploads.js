import React, { Component } from "react";
import "./App.css";
import AppEntity from './AddEntity';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initially, no file is selected 
            selectedFile: null
        };

    }
    // On file select (from the pop up) 
    onFileChange = event => {

        // Update the state 
        this.setState({ selectedFile: event.target.files[0] });

    };
    // On file upload (click the upload button) 
    onFileUpload = () => {

        // Create an object of formData 
        // const formData = new FormData();

        // // Update the formData object 
        // formData.append(
        //     "myFile",
        //     this.state.selectedFile,
        //     this.state.selectedFile.name
        // );
       var file = this.state.selectedFile
        // Details of the uploaded file 
        console.log(this.state.selectedFile);
        fetch('http://localhost:9001/uploads', { // Your POST endpoint
    method: 'POST',
    mode:'no-cors',
    headers: {
      // Content-Type may need to be completely **omitted**
      // or you may need something
      "Content-Type": "You will perhaps need to define a content-type here"
    },
    body: file // This is your file object
  }).then(
    success => console.log(success) // Handle the success response object
  ).catch(
    error => console.log(error) // Handle the error response object
  );
};

        // fetch("http://localhost:9001/uploads")
        //     .then(res => res.text())
        //     .then(res => this.setState({ apiResponse: res }))
        //     .catch(err => err);
    


    render() {
        return (
            <div className="App">

                <h3>
                    File Upload using React!
            </h3>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>
                        Upload!
                </button>
                </div>
            </div>
        );
    }
}

export default ImageUpload;
