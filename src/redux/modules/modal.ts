import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';

/**
 * action
 */
const actionCreator = actionCreatorFactory();
export const toggle = actionCreator('TOGGLE_MODAL');

const INITIAL_STATE = false;

/**
 * reducer
 */
const reducer = reducerWithInitialState(INITIAL_STATE).case(
	toggle,
	(state) => !state,
);

export default reducer;

/**
 * selector
 */
export const selectModal = createSelector(
	[(state: RootState) => state.ui.modal],
	(modal) => modal,
);
