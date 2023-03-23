import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '../../../organism/card/Card';
import { FAVOURITE_SHOW } from '../../../redux/actions/favourite';
import styles from './favouriteshow.module.css';

function FavouriteShow() {
    const favoriteShow = useSelector(state => state.favouriteReducer.favouriteShows);
    const dispatch =  useDispatch();
    const navigate = useNavigate();

    console.log(favoriteShow);

    const onFavourite = (id) => {
        dispatch(FAVOURITE_SHOW(id));
   }  

   const onClickCard = (data) => {
    const link = '/show/'+data.id+'/'+data.name;
    navigate(link);
   }
   
  return (
    <div className={styles.show}>
        {favoriteShow.map((item, index) => (
                    <div key={index} onClick={() => onClickCard(item)}>
                        <Card
                            item={item}
                            key={item.id}
                            favourite={true}
                            requestFrom={true}
                            onFavourite={() => onFavourite(item)}
                            follow = {true}
                        />
                    </div>
        ))}
    </div>
  )
}

export default FavouriteShow;