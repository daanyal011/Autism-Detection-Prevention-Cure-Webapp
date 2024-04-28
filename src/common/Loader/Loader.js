import React from 'react';
import Spinner from './assets/loader.gif';


function Loader() {
    return (
       
        <div className="text-center spinner">
        <img src={Spinner} alt="loading"/>
        </div>
        
    )
}

export default Loader;
