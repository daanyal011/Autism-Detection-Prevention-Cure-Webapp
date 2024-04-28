import React, { Component } from 'react';
import './Modal.css';

import Backdrop from './../Backdrop/Backdrop';

class Modal extends Component {
    
    render() {
      
        return (
            <div>
                <Backdrop />
                <div className="modalbody">
                <button className="closebutton" onClick = {() => this.props.close(this.props.modalCloseHandler)}>X</button>
                    {this.props.content}
                </div>
            </div>
        )
    }
}

export default Modal;
