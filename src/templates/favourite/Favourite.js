import React from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../organism/card";
import FavouritePlaceholder from "../../molecules/favouritePlaceholder";

import styles from "./favourite.module.css";

function Favourite({ favData, onFavourite, favouriteOf }) {
    const navigate = useNavigate();

    const onClickCard = (data) => {
        const link = "/show/" + data.id + "/" + data.name;
        navigate(link);
    };

    return (
        <div className={styles.favorite}>
            <h1 className={styles.favorite__title}>Favourite {favouriteOf}</h1>
            <div className="container">
                {favData.length > 0 ? (
                    favData.map((item, index) => (
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
                    ))
                ) : (
                    <FavouritePlaceholder favouritePlaceholderFor={favouriteOf} />
                )}
            </div>
        </div>
    );
}

export default Favourite;
