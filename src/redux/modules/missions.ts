import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { Dispatch } from 'react';
import { StepAction, steps } from 'redux-effects-steps';
import { RootState } from './reducers';
import { generateId, getTimestamp } from '../../libs/utility';
import { Mission } from './mission';

interface Missions {
	missions: Mission[];
	isLoading: boolean;
}
type CreatePayload = {
	title: string;
	dueDate: string;
	mentalDamage: number;
	pysicalDamage: number;
	point: number;
	memo: string[];
};

/**
 * action
 */
export const actionCreator = actionCreatorFactory();
export const addMissionAcitons = actionCreator.async<Mission, Mission, Error>(
	'ADD_Mission',
);
const addMission = (body: Mission): StepAction =>
	steps(
		addMissionAcitons.started(body),
		() =>
			fetch('/api/missions', {
				method: 'POST',
				body: JSON.stringify(body),
			}),
		[
			({ mission }) =>
				addMissionAcitons.done({ params: body, result: mission }),
			({ error }) => addMissionAcitons.failed({ params: body, error }),
		],
	);

export const createCheer = (mission: CreatePayload) => {
	return (dispatch: Dispatch<any>, getState: () => RootState): void => {
		const id = generateId(getState().resources.missions.missions);
		const registarDate = getTimestamp();
		dispatch(
			addMission({
				...mission,
				id,
				registarDate,
				status: 'new',
				completeDate: 0,
				heroInterview: '',
			}),
		);
	};
};
const INITIAL_STATE: Missions = {
	missions: [],
	isLoading: false,
};

/**
 * reducer
 */
const reducer = reducerWithInitialState(INITIAL_STATE)
	.case(addMissionAcitons.started, (state) => ({
		...state,
		isLoading: true,
	}))
	.case(addMissionAcitons.done, (state, payload) => ({
		missions: [...state.missions, payload.result],
		isLoading: false,
	}))
	.case(addMissionAcitons.failed, (state, payload) => {
		console.log(payload.error);
		return {
			...state,
			isLoading: false,
		};
	});

export default reducer;

/**
 * selector
 */
export const selectNewMissions = createSelector(
	[(state: RootState) => state.resources.missions.missions],
	(missions) => missions.filter((mission) => mission.status === 'new'),
);
export const selectProgressMissions = createSelector(
	[(state: RootState) => state.resources.missions.missions],
	(missions) => missions.filter((mission) => mission.status === 'progress'),
);
export const selectCompleteMissions = createSelector(
	[(state: RootState) => state.resources.missions.missions],
	(missions) => missions.filter((mission) => mission.status === 'complete'),
);
export const selectMissionsLoading = createSelector(
	[(state: RootState) => state.resources.missions.isLoading],
	(isLoading) => isLoading,
);
