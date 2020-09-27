import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';

type CheerStatus = 'new' | 'canChange' | 'canUse' | 'used';
type Cheer = {
	id: number;
	title: string;
	point: number;
	memo?: string;
	status: CheerStatus;
	registarDate: string;
	usedDate: string;
};
