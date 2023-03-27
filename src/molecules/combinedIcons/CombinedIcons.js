import React from "react";
import PropTypes from "prop-types";

import IconWithLink from "../iconWithLink";

import styles from "./combinedIcons.module.css";

function CombinedIcons({ stylePara }) {
    return (
        <div className={styles.combinedIcons}>
            <p style={stylePara}>Share this on:</p>
            <IconWithLink
                className="fa-brands fa-facebook"
                link="https://www.facebook.com/"
            />
            <IconWithLink
                className="fa-brands fa-twitter"
                link="https://www.twitter.com/"
            />
            <IconWithLink
                className="fa-brands fa-reddit"
                link="https://www.reddit.com/"
            />
            <IconWithLink
                className="fa-brands fa-tumblr"
                link="https://www.tumblr.com/"
            />
        </div>
    );
}

CombinedIcons.propTypes = {
    requestFrom: PropTypes.object,
};

CombinedIcons.defaultProps = {
    requestFrom: {},
};

export default React.memo(CombinedIcons);
