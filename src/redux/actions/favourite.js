import { SET_FAVOURITE_PEOPLE, SET_FAVOURITE_SHOW } from "../constant";

export const FAVOURITE_SHOW = (data) => ({type: SET_FAVOURITE_SHOW, payload: {data}});
export const FAVOURITE_PEOPLE = (data) => ({type: SET_FAVOURITE_PEOPLE, payload: {data}});