import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { FAVOURITE_SHOW } from '../../../redux/actions/favourite';
import Favourite from '../../../templates/favourite';

import styles from './favouriteshow.module.css';

function FavouriteShow() {
    const favoriteShow = useSelector(state => state.favouriteReducer.favouriteShows);
    const dispatch =  useDispatch();

    const onFavourite = (id) => {
        dispatch(FAVOURITE_SHOW(id));
   }  
   
  return (
    <div>
        <Favourite favData={favoriteShow} onFavourite={onFavourite}/>
    </div>
  )
}

export default FavouriteShow;