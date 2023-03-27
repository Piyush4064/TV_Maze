import React from "react";

import { useNavigate } from "react-router-dom";
import Card from "../../organism/card";
import FavouritePlaceholder from "../../molecules/favouritePlaceholder";

import styles from "./favourite.module.css";


function Favourite({ favData, onFavourite, favouriteOf ,requestFrom}}) {
    const navigate = useNavigate();




    return (
        <div className={styles.favorite}>
            <h1 className={styles.favorite__title}>Favourite {favouriteOf}</h1>
            <div className="container">
                {favData.length > 0 ? (
                   favData.map((item) => (
                        <Card
                            item={item}
                            key={item.id}
                            favourite={true}
                            requestFrom={requestFrom}
                            onFavourite={() => onFavourite(item)}
                            follow={false}
                            isFavourite = {true}
                        />
                    )
                ) : (
                    <FavouritePlaceholder favouritePlaceholderFor={favouriteOf} />
                )}

            </div>
        </div>
    );
}

export default Favourite;
