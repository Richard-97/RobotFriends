import {CHANGE_SEARCH_FIELD} from './Constans';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})