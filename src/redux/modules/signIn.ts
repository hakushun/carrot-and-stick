import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { combine, maxLength, minLength, regexp } from 'favalid';
import { RootState } from './reducers';

export type SignIn = {
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
const actionCreator = actionCreatorFactory();
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
 * validations
 */

const minEmailLengthMessage = () => '10文字以上で入力してください';
const maxEmailLengthMessage = () => '100文字以内で入力してください';
const minPasswordLengthMessage = () => '6文字以上で入力してください';
const maxPasswordLengthMessage = () => '16文字以内で入力してください';
const emailMessage = () => 'メールアドレスの形式が不正です。';
/* eslint-disable-next-line */
const mailCheck = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const emailValidator = combine(
	minLength(10, minEmailLengthMessage),
	maxLength(100, maxEmailLengthMessage),
	regexp(mailCheck, emailMessage, {}),
);

const passwordValidator = combine(
	minLength(6, minPasswordLengthMessage),
	maxLength(16, maxPasswordLengthMessage),
);

const validator = (form: typeof INITIAL_STATE.form) => ({
	mailAddress: emailValidator(form.mailAddress),
	password: passwordValidator(form.password),
});

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
		validationErrors: { ...validator(state.form) },
	}),
);
export default reducer;

/**
 * selector
 */
// createSelector：storeから欲しいstateを持ってくる、stateをここで加工できるよ
export const selectSignIn = createSelector(
	[(state: RootState) => state.signIn],
	(signIn) => signIn,
);

export const selectSignInMailAdressErrors = createSelector(
	[(state: RootState) => state.signIn],
	(signIn) => {
		return (
			signIn.edited.mailAddress && signIn.validationErrors.mailAddress.error
		);
	},
);

export const selectSignInPasswordErrors = createSelector(
	[(state: RootState) => state.signIn],
	(signIn) => {
		return signIn.edited.password && signIn.validationErrors.password.error;
	},
);

export const selectSignInValidationErrors = createSelector(
	[(state: RootState) => state.signIn],
	(signIn) => {
		return (
			!signIn.edited.mailAddress ||
			!signIn.edited.password ||
			signIn.validationErrors.mailAddress.error ||
			signIn.validationErrors.password.error
		);
	},
);
