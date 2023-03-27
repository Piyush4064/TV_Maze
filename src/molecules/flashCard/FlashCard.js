import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import StarRating from "../../molecules/starRating";
import { getUniqueKey } from "../../helper";

import styles from "./flashCard.module.css";

function FlashCard({ details, flashCardDetails, flashCardFor }) {
    return (
        <div className={styles.flashCard}>
            <h2 className={styles.flashCard__title}>{flashCardFor} Info </h2>
            {flashCardDetails.map((item, index) => {
                const content = item.contentReader(details);
                if (content === null) {
                    return <Fragment key={getUniqueKey(index)}></Fragment>;
                }
                return (
                    <div key={getUniqueKey(index)}>
                        <strong>{item.label}: </strong>
                        {item.label === "Official Site" ? (
                            <Link to={content}>{content}</Link>
                        ) : (
                            content
                        )}
                    </div>
                );
            })}
            {flashCardFor === "Show" && <StarRating rating={details?.rating?.average} />}
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
