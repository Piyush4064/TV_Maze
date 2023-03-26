import React from 'react';
import { Route, Routes} from 'react-router-dom';
import FavouriteShow from './favouriteShow/FavouriteShow';
import FavouritePeople from './favouritePeople/FavouritePeople';



function PeopleIndex() {
  return (
    <Routes>
        <Route path="favourite">
            <Route index element={<FavouriteShow />} />
            <Route path="show" element={<FavouriteShow />} />
            <Route path="people" element={<FavouritePeople />} />
        </Route>
    </Routes>
  )
}

export default PeopleIndex;