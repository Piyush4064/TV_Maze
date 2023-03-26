import React from "react";
import Card from "../../organism/card";

import styles from "./favourite.module.css";

function FavouriteShow({ favData, onFavourite, favouriteOf ,requestFrom}) {


    return (
        <div className={styles.favorite}>
            <h1 className={styles.favorite__title}>Favourite {favouriteOf}</h1>
            <div className="container">
                {favData.map((item) => (
                        <Card
                            item={item}
                            key={item.id}
                            favourite={true}
                            requestFrom={requestFrom}
                            onFavourite={() => onFavourite(item)}
                            follow={false}
                            isFavourite = {true}
                        />
                ))}
            </div>
        </div>
    );
}

export default FavouriteShow;
