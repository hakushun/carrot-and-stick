import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';
import { editMission, initializeMission } from './mission';
import {
	addMissionAcitons,
	deleteMissionAcitons,
	updateMissionAcitons,
} from './missions';
import { initializeCheer, editCheer } from './cheer';
import {
	addCheerAcitons,
	updateCheerAcitons,
	deleteCheerAcitons,
} from './cheers';

/**
 * action
 */
const actionCreator = actionCreatorFactory();
export const toggle = actionCreator('TOGGLE_MODAL');

const INITIAL_STATE = false;

/**
 * reducer
 */
const reducer = reducerWithInitialState(INITIAL_STATE)
	.case(toggle, (state) => !state)
	.case(initializeMission, (state) => !state)
	.case(editMission, (state) => !state)
	.case(addMissionAcitons.done, (state) => !state)
	.case(updateMissionAcitons.done, (state) => !state)
	.case(deleteMissionAcitons.done, (state) => !state)
	.case(initializeCheer, (state) => !state)
	.case(editCheer, (state) => !state)
	.case(addCheerAcitons.done, (state) => !state)
	.case(updateCheerAcitons.done, (state) => !state)
	.case(deleteCheerAcitons.done, (state) => !state);

export default reducer;

/**
 * selector
 */
export const selectModal = createSelector(
	[(state: RootState) => state.ui.modal],
	(modal) => modal,
);
