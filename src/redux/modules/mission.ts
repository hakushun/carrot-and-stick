import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';
import {
	addMissionAcitons,
	deleteMissionAcitons,
	updateMissionAcitons,
} from './missions';

export type MissionStatus = 'new' | 'progress' | 'complete';
export type Mission = {
	id: number;
	title: string;
	dueDate: number;
	mentalDamage: number;
	physicalDamage: number;
	point: number;
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

type EditPayload = {
	mission: Mission;
};
/**
 * action
 */
const actionCreator = actionCreatorFactory();
export const change = actionCreator<ChangePayload>('CHANGE_MISSION');
export const initializeMission = actionCreator('INITIALAIZE_MISSION');
export const editMission = actionCreator<EditPayload>('EDIT_MISSION');

const INITIAL_STATE: Mission = {
	id: 0,
	title: '',
	dueDate: 0,
	mentalDamage: 0,
	physicalDamage: 0,
	point: 0,
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
	.case(initializeMission, () => ({ ...INITIAL_STATE }))
	.case(addMissionAcitons.done, () => ({ ...INITIAL_STATE }))
	.case(editMission, (_state, payload) => ({ ...payload.mission }))
	.case(updateMissionAcitons.done, () => ({ ...INITIAL_STATE }))
	.case(deleteMissionAcitons.done, () => ({ ...INITIAL_STATE }));

export default reducer;

/**
 * selector
 */
export const selectMission = createSelector(
	[(state: RootState) => state.ui.mission],
	(mission) => mission,
);
