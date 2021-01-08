import React, { Component } from "react";
import Footer from './Footer';
import Header from './Header'

import { useDropzone } from "react-dropzone";

const DropzoneWithoutKeyboard = (props) => {
     const {getRootProps, getInputProps, acceptedFiles} = useDropzone({noKeyboard: true});
    const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);
  
    return (
        <React.Fragment>
        <body>
          <div className="page-wrapper">
            <Header />
            <main className="main">
      <section className="container">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p>Dropzone without keyboard events</p>
          <em>(SPACE/ENTER and focus events are disabled)</em>
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </section>
      </main>
      <Footer/>
      </div></body></React.Fragment>
    );
  } 

 
export default DropzoneWithoutKeyboard;
