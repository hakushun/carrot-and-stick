import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';
import { initialize } from './mission';
import { addMissionAcitons } from './missions';

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
	.case(initialize, (state) => !state)
	.case(addMissionAcitons.done, (state) => !state);

export default reducer;

/**
 * selector
 */
export const selectModal = createSelector(
	[(state: RootState) => state.ui.modal],
	(modal) => modal,
);
