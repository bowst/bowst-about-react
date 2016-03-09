
//bring in all sort of good stuff from the redux library
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import notes from './notes/reducers.js'

const reducers = {
	notes
};

const app = combineReducers({
	...reducers
});


let store = createStore(app);

export default store