import React from "react";

import styles from "./description.module.css";

import CombinedSocialMedia from "../../molecules/combinedSocialMedia/CombinedSocialMedia";

function Description() {
    return (
        <div className={styles.summary}>
            <p>
                After the stories of Jango and Boba Fett, another warrior emerges in the
                Star Wars universe. The Mandalorian is set after the fall of the Empire
                and before the emergence of the First Order. We follow the travails of a
                lone gunfighter in the outer reaches of the galaxy far from the authority
                of the New Republic...
            </p>
            <CombinedSocialMedia />
        </div>
    );
}

export default Description;
