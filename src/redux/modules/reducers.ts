import { combineReducers } from 'redux';
import signIn from './signIn';

// 複数のreducerを一つにまとめる
const rootReducer = combineReducers({ signIn });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
