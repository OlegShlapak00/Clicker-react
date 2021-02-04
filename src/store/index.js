import {combineReducers} from 'redux';
import storeReducers from './store';

const allReducers = combineReducers({
    store: storeReducers
})

export default allReducers;
