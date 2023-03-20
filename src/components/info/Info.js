import Card from "../../organism/card/Card";
import FlashCard from "../../molecules/flashCard/FlashCard";
import Description from "../../organism/description/Description";
import styles from "./info.module.css";
import MovieNav from "../../molecules/MovieNav/MovieNav";

const description =
    "We don't have a biography for Mike Vogel yet. Hang in there, or go ahead and contribute one.";

function Info({ item, summary = description }) {
    return (
        <div>
            <div className={styles.main}>
                <Card showFooterName={false} follow={true} item={item} />
                <Description summary={summary} />
                <FlashCard details={item} />
            </div>
        </div>
    );
}

export default Info;
