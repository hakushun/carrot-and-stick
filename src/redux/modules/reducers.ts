import { combineReducers } from 'redux';

// 複数のreducerを一つにまとめる
const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
