import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { Dispatch } from 'react';
import { StepAction, steps } from 'redux-effects-steps';
import axios from 'axios';
import { RootState } from './reducers';
import { generateId, getTimestamp } from '../../libs/utility';
import { Cheer, CheerStatus } from './cheer';

interface Cheers {
	cheers: Cheer[];
	isLoading: boolean;
}
type CreatePayload = {
	title: string;
	point: number;
	memo: string;
};

type ChangeStatus = {
	cheer: Cheer;
	status: CheerStatus;
};
/**
 * action
 */
export const actionCreator = actionCreatorFactory();
export const addCheerAcitons = actionCreator.async<Cheer, Cheer, Error>(
	'ADD_CHEER',
);
export const changeStatus = actionCreator<ChangeStatus>('CHANGE_STATUS');
export const updateCheerAcitons = actionCreator.async<Cheer, Cheer, Error>(
	'UPDATE_CHEER',
);
export const deleteCheerAcitons = actionCreator.async<Cheer, Cheer, Error>(
	'DELETE_CHEER',
);
const addCheer = (body: Cheer): StepAction =>
	steps(
		addCheerAcitons.started(body),
		() => axios.post('/api/cheers', { data: body }),
		[
			({ data }) => addCheerAcitons.done({ params: body, result: data.data }),
			({ error }) => addCheerAcitons.failed({ params: body, error }),
		],
	);
export const updateCheer = (body: Cheer): StepAction =>
	steps(
		updateCheerAcitons.started(body),
		() => axios.post('/api/cheers', { data: body }),
		[
			({ data }) =>
				updateCheerAcitons.done({ params: body, result: data.data }),
			({ error }) => updateCheerAcitons.failed({ params: body, error }),
		],
	);
export const deleteCheer = (body: Cheer): StepAction =>
	steps(
		deleteCheerAcitons.started(body),
		() => axios.post('/api/cheers', { data: body }),
		[
			({ data }) =>
				deleteCheerAcitons.done({ params: body, result: data.data }),
			({ error }) => deleteCheerAcitons.failed({ params: body, error }),
		],
	);
export const createCheer = (cheer: CreatePayload) => {
	return (dispatch: Dispatch<any>, getState: () => RootState): void => {
		const id = generateId(getState().resources.cheers.cheers);
		const registarDate = getTimestamp();
		dispatch(
			addCheer({
				...cheer,
				id,
				registarDate,
				status: 'new',
				usedDate: 0,
			}),
		);
	};
};
const INITIAL_STATE: Cheers = {
	cheers: [],
	isLoading: false,
};

/**
 * reducer
 */
const reducer = reducerWithInitialState(INITIAL_STATE)
	.case(addCheerAcitons.started, (state) => ({
		...state,
		isLoading: true,
	}))
	.case(addCheerAcitons.done, (state, payload) => ({
		cheers: [...state.cheers, payload.result],
		isLoading: false,
	}))
	.case(addCheerAcitons.failed, (state, payload) => {
		console.log(payload.error);
		return {
			...state,
			isLoading: false,
		};
	})
	.case(changeStatus, (state, payload) => {
		return {
			...state,
			cheers: [
				...state.cheers.filter((cheer) => cheer.id !== payload.cheer.id),
				{
					...payload.cheer,
					status: payload.status,
				},
			],
		};
	})
	.case(updateCheerAcitons.started, (state) => ({
		...state,
		isLoading: true,
	}))
	.case(updateCheerAcitons.done, (state, payload) => ({
		...state,
		isLoading: true,
		cheers: [
			...state.cheers.map((cheer) => {
				if (cheer.id === payload.result.id) {
					return { ...payload.result };
				}
				return cheer;
			}),
		],
	}))
	.case(updateCheerAcitons.failed, (state, payload) => {
		console.log(payload.error);
		return {
			...state,
			isLoading: false,
		};
	})
	.case(deleteCheerAcitons.started, (state) => ({
		...state,
		isLoading: true,
	}))
	.case(deleteCheerAcitons.done, (state, payload) => ({
		...state,
		isLoading: true,
		cheers: [...state.cheers.filter((cheer) => cheer.id !== payload.result.id)],
	}))
	.case(deleteCheerAcitons.failed, (state, payload) => {
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
export const selectCheers = createSelector(
	[(state: RootState) => state.resources.cheers.cheers],
	(cheers) => cheers,
);
export const selectNewCheers = createSelector(
	[(state: RootState) => state.resources.cheers.cheers],
	(cheers) => cheers.filter((cheer) => cheer.status === 'new'),
);
export const selectCanChangeCheers = createSelector(
	[(state: RootState) => state.resources.cheers.cheers],
	(cheers) => cheers.filter((cheer) => cheer.status === 'canChange'),
);
export const selectCanUseCheers = createSelector(
	[(state: RootState) => state.resources.cheers.cheers],
	(cheers) => cheers.filter((cheer) => cheer.status === 'canUse'),
);
export const selectUsedCheers = createSelector(
	[(state: RootState) => state.resources.cheers.cheers],
	(cheers) => cheers.filter((cheer) => cheer.status === 'used'),
);
export const selectCheersLoading = createSelector(
	[(state: RootState) => state.resources.cheers.isLoading],
	(isLoading) => isLoading,
);
