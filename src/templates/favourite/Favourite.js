import React from "react";

import { useNavigate } from "react-router-dom";
import Card from "../../organism/card";

import styles from "./favourite.module.css";

function FavouriteShow({ favData, onFavourite, favouriteOf}) {
    const navigate = useNavigate();

    const onClickCard = (data) => {
        const link = "/show/" + data.id + "/" + data.name;
        navigate(link);
    };

    return (
        <div className={styles.favorite}>
            <h1 className={styles.favorite__title}>Favourite {favouriteOf}</h1>
            <div className="container">
                {favData.map((item, index) => (
                    <div key={index} onClick={() => onClickCard(item)}>
                        <Card
                            item={item}
                            key={item.id}
                            favourite={true}
                            requestFrom={true}
                            onFavourite={() => onFavourite(item)}
                            follow={true}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FavouriteShow;
