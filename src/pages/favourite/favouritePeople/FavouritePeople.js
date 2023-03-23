import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '../../../organism/card/Card';
import { FAVOURITE_PEOPLE } from '../../../redux/actions/favourite';
import styles from './favouritepeople.module.css';

function FavouritePeople() {
    const favoritePeople = useSelector(state => state.favouriteReducer.favouritePeople);
    const dispatch =  useDispatch();
    const navigate = useNavigate();

    const onFavourite = (id) => {
        dispatch(FAVOURITE_PEOPLE(id));
    }

    const onClickCard = (data) => {
       
        const link = '/people/'+data.id+'/'+data.name;
        navigate(link);
    }
   
  return (
    <div className={styles.show}>
        {favoritePeople.map((item, index) => (
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

export default FavouritePeople;