import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';

export type SortKey = 'dueDate' | 'mentalDamage' | 'physicalDamage' | 'point';
export type CheersSortKey = 'point' | 'registerDate';

type ChangePayload = {
	name: string;
	value: string;
};

/**
 * action
 */
const actionCreator = actionCreatorFactory();
export const changeKey = actionCreator<ChangePayload>('CHANGE_SORD_KEY');

const INITIAL_STATE = {
	newMissions: 'dueDate-up',
	progressMissions: 'dueDate-up',
	cheers: 'registerDate-up',
	cheersRadio: 'all',
};

/**
 * reducer
 */
const reducer = reducerWithInitialState(INITIAL_STATE).case(
	changeKey,
	(state, payload) => ({
		...state,
		[payload.name]: payload.value,
	}),
);

export default reducer;

/**
 * selector
 */
export const selectSortKey = createSelector(
	[(state: RootState) => state.ui.sortKey],
	(sortKey) => sortKey,
);

export const selectCheersRadio = createSelector(
	[(state: RootState) => state.ui.sortKey.cheersRadio],
	(cheersRadio) => cheersRadio,
);
