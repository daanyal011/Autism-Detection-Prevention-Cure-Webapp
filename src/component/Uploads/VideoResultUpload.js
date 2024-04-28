import React, {Component} from 'react';
// import UploadPreview from './UploadPreview';
// import './Uploader.css'

function VideoResultUpload() {

    // const url = "https://forms.gle/BhPL39CXRVydokmk8"

    const redirectVideoForm = () => {
        // window.location.href = url;
        window.open('https://forms.gle/BhPL39CXRVydokmk8', '_blank');
      };

    return (
        <>
        <button className="btn btn-success" onClick={redirectVideoForm}>Submit Video Result</button>
        </>
    )
}

export default VideoResultUpload
