import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../modules/reducers';

export const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
	console.log(store.getState());
});
