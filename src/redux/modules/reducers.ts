import { combineReducers } from 'redux';
import signIn from './signIn';
import signUp from './signUp';

// 複数のreducerを一つにまとめる
const rootReducer = combineReducers({ signIn, signUp });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
