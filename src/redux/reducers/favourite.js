import { FAVOURITE_PEOPLE, FAVOURITE_SHOW, SET_FAVOURITE_PEOPLE, SET_FAVOURITE_SHOW } from "../constant"


const initalState = {
    favouriteShows: JSON.parse(localStorage.getItem(FAVOURITE_SHOW)) || [],
    favouritePeople: JSON.parse(localStorage.getItem(FAVOURITE_PEOPLE)) || []
};


const favouriteReducer = (state = initalState, action) => {
    switch(action.type){
        case SET_FAVOURITE_SHOW:
            var favouriteShows =  state.favouriteShows;
            const isShowsFav = favouriteShows.filter((data) => data.id === action.payload.data.id);
            if(isShowsFav.length === 0){
                favouriteShows = [...favouriteShows, action.payload.data];
            }else{
                favouriteShows = favouriteShows.filter((data) => data.id!==action.payload.data.id)
            }

            localStorage.setItem(FAVOURITE_SHOW, JSON.stringify(favouriteShows));
            return{...state, favouriteShows};

        case  SET_FAVOURITE_PEOPLE : 
            var favouritePeople = state.favouritePeople;
            const isPeopleFav=  favouritePeople.filter((data) => data.id === action.payload.data.id);
            if(isPeopleFav.length === 0){
                favouritePeople = [...favouritePeople, action.payload.data];
            }else{
                favouritePeople = favouritePeople.filter((data) => data.id!==action.payload.data.id);
            }
            localStorage.setItem(FAVOURITE_PEOPLE, JSON.stringify(favouritePeople));
            return{...state, favouritePeople};

        default:
            return state;
    }
};



export default favouriteReducer;