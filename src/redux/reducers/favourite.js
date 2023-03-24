import { FAVOURITE_PEOPLE, FAVOURITE_SHOW, SET_FAVOURITE_PEOPLE, SET_FAVOURITE_SHOW } from "../constant"


const initalState = {
    favouriteShows: JSON.parse(localStorage.getItem(FAVOURITE_SHOW)) || [],
    favouritePeople: JSON.parse(localStorage.getItem(FAVOURITE_PEOPLE)) || []
};


const favouriteReducer = (state = initalState, action) => {
    switch(action.type){
        case SET_FAVOURITE_SHOW:
            var favouriteShows =  state.favouriteShows;
            const isShowsFav = favouriteShows.includes(action.payload.id);
            if(!isShowsFav){
                favouriteShows = [...favouriteShows, action.payload.id];
            }else{
                favouriteShows = favouriteShows.filter((id) => id!==action.payload.id)
            }

            localStorage.setItem(FAVOURITE_SHOW, JSON.stringify(favouriteShows));
            return{...state, favouriteShows};

        case  SET_FAVOURITE_PEOPLE : 
            var favouritePeople = state.favouritePeople;
            const isPeopleFav=  favouritePeople.includes(action.payload.id);
            if(!isPeopleFav){
                favouritePeople = [...favouritePeople, action.payload.id];
            }else{
                favouritePeople = favouritePeople.filter((id) => id!==action.payload.id);
            }
            localStorage.setItem(FAVOURITE_PEOPLE, JSON.stringify(favouritePeople));
            return{...state, favouritePeople};

        default:
            return state;
    }
};



export default favouriteReducer;