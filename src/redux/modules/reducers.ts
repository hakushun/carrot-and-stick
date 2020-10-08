import { combineReducers } from 'redux';
import signIn from './signIn';
import signUp from './signUp';
import mission from './mission';
import cheer from './cheer';
import modal from './modal';
import missions from './missions';
import cheers from './cheers';

// 複数のreducerを一つにまとめる
const rootReducer = combineReducers({
	resources: combineReducers({ missions, cheers }),
	ui: combineReducers({ signIn, signUp, mission, cheer, modal }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
