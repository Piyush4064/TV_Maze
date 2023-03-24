import { SET_FAVOURITE_PEOPLE, SET_FAVOURITE_SHOW } from "../constant";

export const FAVOURITE_SHOW = (id) => ({type: SET_FAVOURITE_SHOW, payload: {id}});
export const FAVOURITE_PEOPLE = (id) => ({type: SET_FAVOURITE_PEOPLE, payload: {id}});