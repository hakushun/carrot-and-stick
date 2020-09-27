import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';

type MissionStatus = 'new' | 'progress' | 'complete';
type Mission = {
	id: number;
	title: string;
	dueDate: string;
	mentalDamage: number;
	pysicalDamage: number;
	point: number;
	memo?: string[];
	status: MissionStatus;
	registarDate: string;
	completeDate: string;
	heroInterview?: string;
};
