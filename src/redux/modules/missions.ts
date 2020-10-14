import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { Dispatch } from 'react';
import { StepAction, steps } from 'redux-effects-steps';
import axios from 'axios';
import { RootState } from './reducers';
import { generateId, getTimestamp } from '../../libs/utility';
import { Mission, MissionStatus } from './mission';

interface Missions {
	missions: Mission[];
	isLoading: boolean;
}
type CreatePayload = {
	title: string;
	dueDate: string;
	mentalDamage: number;
	physicalDamage: number;
	point: number;
	memo: string;
};

type ChangeStatus = {
	mission: Mission;
	status: MissionStatus;
};
/**
 * action
 */
export const actionCreator = actionCreatorFactory();
export const addMissionAcitons = actionCreator.async<Mission, Mission, Error>(
	'ADD_MISSION',
);
export const changeStatus = actionCreator<ChangeStatus>(
	'CHANGE_MISSION_STATUS',
);
export const updateMissionAcitons = actionCreator.async<
	Mission,
	Mission,
	Error
>('UPDATE_MISSION');
export const deleteMissionAcitons = actionCreator.async<
	Mission,
	Mission,
	Error
>('DELETE_MISSION');
const addMission = (body: Mission): StepAction =>
	steps(
		addMissionAcitons.started(body),
		() => axios.post('/api/missions', { data: body }),
		[
			({ data }) => addMissionAcitons.done({ params: body, result: data.data }),
			({ error }) => addMissionAcitons.failed({ params: body, error }),
		],
	);
export const updateMission = (body: Mission): StepAction =>
	steps(
		updateMissionAcitons.started(body),
		() => axios.post('/api/missions', { data: body }),
		[
			({ data }) =>
				updateMissionAcitons.done({ params: body, result: data.data }),
			({ error }) => updateMissionAcitons.failed({ params: body, error }),
		],
	);
export const deleteMission = (body: Mission): StepAction =>
	steps(
		deleteMissionAcitons.started(body),
		() => axios.post('/api/missions', { data: body }),
		[
			({ data }) =>
				deleteMissionAcitons.done({ params: body, result: data.data }),
			({ error }) => deleteMissionAcitons.failed({ params: body, error }),
		],
	);
export const createMission = (mission: CreatePayload) => {
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
	})
	.case(changeStatus, (state, payload) => {
		if (payload.status === 'complete') {
			return {
				...state,
				missions: [
					...state.missions.filter(
						(mission) => mission.id !== payload.mission.id,
					),
					{
						...payload.mission,
						status: payload.status,
						completeDate: getTimestamp(),
					},
				],
			};
		}
		return {
			...state,
			missions: [
				...state.missions.filter(
					(mission) => mission.id !== payload.mission.id,
				),
				{
					...payload.mission,
					status: payload.status,
				},
			],
		};
	})
	.case(updateMissionAcitons.started, (state) => ({
		...state,
		isLoading: true,
	}))
	.case(updateMissionAcitons.done, (state, payload) => ({
		...state,
		isLoading: true,
		missions: [
			...state.missions.map((mission) => {
				if (mission.id === payload.result.id) {
					return { ...payload.result };
				}
				return mission;
			}),
		],
	}))
	.case(updateMissionAcitons.failed, (state, payload) => {
		console.log(payload.error);
		return {
			...state,
			isLoading: false,
		};
	})
	.case(deleteMissionAcitons.started, (state) => ({
		...state,
		isLoading: true,
	}))
	.case(deleteMissionAcitons.done, (state, payload) => ({
		...state,
		isLoading: true,
		missions: [
			...state.missions.filter((mission) => mission.id !== payload.result.id),
		],
	}))
	.case(deleteMissionAcitons.failed, (state, payload) => {
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
export const selectMissions = createSelector(
	[(state: RootState) => state.resources.missions.missions],
	(missions) => missions,
);
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
