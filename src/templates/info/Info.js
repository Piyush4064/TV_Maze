import Card from "../../organism/card";
import FlashCard from "../../molecules/flashCard";
import Description from "../../organism/description";
import styles from "./info.module.css";

const description =
    "<p>We don't have a biography for Mike Vogel yet. Hang in there, or go ahead and contribute one.</p>";

function Info({ item, summary = description, flashCardFor}) {
    return (
        <div className={styles.main}>
            <Card showFooterName={false} follow={true} item={item} />
            <Description summary={summary} />
            <FlashCard details={item} flashCardFor={flashCardFor}/>
        </div>
    );
}

export default Info;
