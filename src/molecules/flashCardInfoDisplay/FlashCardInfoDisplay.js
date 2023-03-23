import React from "react";

function FlashCardInfoDisplay(heading, content) {
    return (
        <div>
            <strong>{heading} :</strong>
            {content}
        </div>
    );
}

export default FlashCardInfoDisplay;
