import React from "react";
import Footer from "./Footer";
import Header from "./Header";
// import './add.css';




  const DragAndDrop = (props) => {
    const handleDragEnter = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const handleDragLeave = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const handleDragOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    return (
      <React.Fragment>
        <body>
          <div className="page-wrapper">
            <Header />
          
              <div
                className={"drag-drop-zone"}
                onDrop={(e) =>  handleDrop(e)}
                onDragOver={(e) => handleDragOver(e)}
                onDragEnter={(e) => handleDragEnter(e)}
                onDragLeave={(e) => handleDragLeave(e)}
              >
                <p>Drag files here to upload</p>
              </div>
           <br/>
            <Footer />
          </div>
        </body>
      </React.Fragment>
    );
  };


export default DragAndDrop;
