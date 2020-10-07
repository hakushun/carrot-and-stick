import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';

type CheerStatus = 'new' | 'canChange' | 'canUse' | 'used';
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

/**
 * action
 */
const actionCreator = actionCreatorFactory();
export const change = actionCreator<ChangePayload>('CHANGE_CHEER');

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
export const selectCheer = createSelector(
	[(state: RootState) => state.ui.cheer],
	(cheer) => cheer,
);
