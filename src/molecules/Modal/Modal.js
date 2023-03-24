import React from "react";
import PropTypes from "prop-types";

import "./modal.css";

function Modal({isOpen, ...props}) {
    return (
        <div
            className={`sidemodal__container ${
                isOpen === true ? "fadein" : "fadeout"
            }`}
        >
            <div
                className={`sidemodal ${isOpen === true ? "slidein" : "slideout"}`}
            >
                {props.children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    isOpen : PropTypes.bool
  };
  
 Modal.defaultProps = {
    isOpen: false
};

export default React.memo(Modal);
