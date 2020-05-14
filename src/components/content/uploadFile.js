import React, { Component, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Button } from 'react-bootstrap';
import './uploadFile.scss';

export default class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFile: null
        }

    }

    onChange = (e) => {
        console.log('file events >>', e.target.files[0]);
        this.setState({ uploadedFile: e.target.files[0] })

    }
    submitFile=()=>{
     console.log('Successfully Work File Button');
    }

    render() {
        console.log('uploaded file >>', this.state.uploadedFile);
        return (
            <div>
                <h3 className="heading">Upload Here File</h3>
                <div className="file-container">
                    <input type="file" name="file" onChange={(e) => this.onChange(e)} />

                </div>
                {/* <button className="uploadBtn">Upload File</button> */}
                <Button className="uploadBtn"
                 variant="secondary" 
                 size="lg"
                 block
                 onClick={this.submitFile}
                 >
                    Upload File
               </Button>
                
            </div>
        )
    }
}


