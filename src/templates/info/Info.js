import React from "react";
import PropTypes from "prop-types";

import Card from "../../organism/card";
import Description from "../../organism/description";
import { DESCRIPTION } from "./constant";
import FlashCard from "../../molecules/flashCard";

import styles from "./info.module.css";

function Info({ item, summary = DESCRIPTION, flashCardDetails, flashCardFor }) {
    return (
        <div className={styles.main}>
            <Card showFooterName={false} follow={true} item={item} />
            <Description summary={summary} />
            <FlashCard
                details={item}
                flashCardDetails={flashCardDetails}
                flashCardFor={flashCardFor}
            />
        </div>
    );
}

Info.propTypes = {
    item: PropTypes.object,
    summary: PropTypes.string,
    flashCardDetails: PropTypes.object,
    flashCardFor: PropTypes.string,
};

Info.defaultProps = {
    item: {},
    summary: DESCRIPTION,
    flashCardDetails: {},
    flashCardFor: "",
};

export default React.memo(Info);
