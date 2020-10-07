import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';
import { addMissionAcitons } from './missions';

export type MissionStatus = 'new' | 'progress' | 'complete';
export type Mission = {
	id: number;
	title: string;
	dueDate: string;
	mentalPoint: number;
	pysicalPoint: number;
	totalPoint: number;
	memo: string;
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
export const change = actionCreator<ChangePayload>('CHANGE_MISSION');
export const initialize = actionCreator('INITIALAIZE_MISSION');

const INITIAL_STATE: Mission = {
	id: 0,
	title: '',
	dueDate: '',
	mentalPoint: 0,
	pysicalPoint: 0,
	totalPoint: 0,
	memo: '',
	status: 'new',
	registarDate: 0,
	completeDate: 0,
	heroInterview: '',
};

/**
 * reducer
 */
const reducer = reducerWithInitialState(INITIAL_STATE)
	.case(change, (state, payload) => ({
		...state,
		[payload.name]: payload.value,
	}))
	.case(initialize, () => ({ ...INITIAL_STATE }))
	.case(addMissionAcitons.done, () => ({ ...INITIAL_STATE }));

export default reducer;

/**
 * selector
 */
export const selectMission = createSelector(
	[(state: RootState) => state.ui.mission],
	(mission) => mission,
);
