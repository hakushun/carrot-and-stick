import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';

type Passion = {
	id: number;
	message: string;
};
type Matsuoka = {
	message: Passion[];
};
