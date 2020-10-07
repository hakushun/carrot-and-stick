import { combineReducers } from 'redux';
import signIn from './signIn';
import signUp from './signUp';
import mission from './mission';
import cheer from './cheer';
import missions from './missions';

// 複数のreducerを一つにまとめる
const rootReducer = combineReducers({
	resources: combineReducers({ missions }),
	ui: combineReducers({ signIn, signUp, mission, cheer }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
