import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';

type MissionStatus = 'new' | 'progress' | 'complete';
export type Mission = {
	id: number;
	title: string;
	dueDate: string;
	mentalDamage: number;
	pysicalDamage: number;
	point: number;
	memo: string[];
	status: MissionStatus;
	registarDate: number;
	completeDate: number;
	heroInterview: string;
};

type ChangePayload = {
	name: string;
	value: string;
};

/**
 * action
 */
const actionCreator = actionCreatorFactory();
const change = actionCreator<ChangePayload>('CHANGE_MISSION');

const INITIAL_STATE = {
	id: 0,
	title: '',
	mentalPoint: 0,
	pysicalPoint: 0,
	totalPoint: 0,
	memo: '',
	status: 'new',
	registarDate: 0,
	usedDate: 0,
};

/**
 * reducer
 */
const reducer = reducerWithInitialState(INITIAL_STATE).case(
	change,
	(state, payload) => ({
		...state,
		[payload.name]: payload.value,
	}),
);

export default reducer;

/**
 * selector
 */
export const selectMission = createSelector(
	[(state: RootState) => state.ui.mission],
	(mission) => mission,
);
