import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';
import {
	addCheerAcitons,
	updateCheerAcitons,
	deleteCheerAcitons,
} from './cheers';

export type CheerStatus = 'new' | 'canChange' | 'canUse' | 'used';
export type Cheer = {
	id: number;
	title: string;
	point: number;
	memo: string;
	status: CheerStatus;
	registarDate: number;
	usedDate: number;
};

type ChangePayload = {
	name: string;
	value: string;
};

type EditPayload = {
	cheer: Cheer;
};
/**
 * action
 */
const actionCreator = actionCreatorFactory();
export const change = actionCreator<ChangePayload>('CHANGE_CHEER');
export const initializeCheer = actionCreator('INITIALAIZE_CHEER');
export const editCheer = actionCreator<EditPayload>('EDIT_CHEER');

const INITIAL_STATE: Cheer = {
	id: 0,
	title: '',
	point: 0,
	memo: '',
	status: 'new',
	registarDate: 0,
	usedDate: 0,
};

/**
 * reducer
 */
const reducer = reducerWithInitialState(INITIAL_STATE)
	.case(change, (state, payload) => ({
		...state,
		[payload.name]: payload.value,
	}))
	.case(initializeCheer, () => ({ ...INITIAL_STATE }))
	.case(addCheerAcitons.done, () => ({ ...INITIAL_STATE }))
	.case(editCheer, (_state, payload) => ({ ...payload.cheer }))
	.case(updateCheerAcitons.done, () => ({ ...INITIAL_STATE }))
	.case(deleteCheerAcitons.done, () => ({ ...INITIAL_STATE }));

export default reducer;

/**
 * selector
 */
export const selectCheer = createSelector(
	[(state: RootState) => state.ui.cheer],
	(cheer) => cheer,
);
