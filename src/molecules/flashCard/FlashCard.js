import React from "react";
import PropTypes from "prop-types";

import styles from "./flashCard.module.css";

function FlashCard({ details, flashCardDetails, flashCardFor }) {
    return (
        <div className={styles.flashCard}>
            <h2 className={styles.flashCard__title}>{flashCardFor} Info </h2>
            {flashCardDetails.map((item) => {
                const content = item.contentReader(details);
                if (content === null) {
                    return <></>;
                }
                return (
                    <div>
                        <strong>{item.label}: </strong>
                        {content}
                    </div>
                );
            })}
        </div>
    );
}

FlashCard.propTypes = {
    details: PropTypes.object,
    flashCardDetails: PropTypes.array,
    flashCardFor: PropTypes.string,
};

FlashCard.defaultProps = {
    details: {},
    flashCardDetails: [],
    flashCardFor: "",
};

export default React.memo(FlashCard);
