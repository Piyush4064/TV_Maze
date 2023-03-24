import React from "react";

import IconWithLink from "../iconWithLink";

import styles from "./combinedIcons.module.css";

function CombinedIcons() {
    return (
        <div className={styles.socailMediaIcon}>
            <p>Share this on:</p>
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

export default React.memo(CombinedIcons);
