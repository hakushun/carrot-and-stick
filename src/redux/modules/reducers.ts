import { combineReducers } from 'redux';
import signIn from './signIn';
import signUp from './signUp';
import mission from './mission';
import missions from './missions';

// 複数のreducerを一つにまとめる
const rootReducer = combineReducers({
	resources: combineReducers({ missions }),
	ui: combineReducers({ signIn, signUp, mission }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
