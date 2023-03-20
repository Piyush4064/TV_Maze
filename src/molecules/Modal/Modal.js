
import React from 'react';
import './modal.css';

function Modal(props) {
  return (
    <div className={`sidemodal__container ${props.isOpen === true ? 'fadein' : 'fadeout'}` }>
        <div className={`sidemodal ${props.isOpen === true ? 'slidein' : 'slideout'}`}>
            {props.children}
        </div>
    </div>
  )
}

export default Modal