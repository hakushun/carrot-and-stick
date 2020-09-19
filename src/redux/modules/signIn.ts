import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';

const actionCreator = actionCreatorFactory();

type SignIn = {
	form: {
		mailAddress: string;
		password: string;
	};
	edited: {
		mailAddress: boolean;
		password: boolean;
	};
	validationErrors: {
		mailAddress: { error: boolean; message: string };
		password: { error: boolean; message: string };
	};
};

type ChangePayload = {
	name: string;
	value: string;
};

/**
 * action
 */
export const changeSignInForm = actionCreator<ChangePayload>(
	'CHANGE_SIGN_IN_VALUE',
);

const INITIAL_STATE = {
	form: {
		mailAddress: '',
		password: '',
	},
	edited: {
		mailAddress: false,
		password: false,
	},
	validationErrors: {
		mailAddress: { error: false, message: '' },
		password: { error: false, message: '' },
	},
};

/**
 * reducer
 */
const reducer = reducerWithInitialState(INITIAL_STATE).case(
	changeSignInForm,
	(state, payload) => ({
		...state,
		form: {
			...state.form,
			[payload.name]: payload.value,
		},
		edited: {
			...state.edited,
			[payload.name]: true,
		},
	}),
);

export default reducer;
