import { combineReducers } from 'redux';
import item from './item'
import id from './id';

export const rootReducer = combineReducers({
    items: item,
    id: id
})