import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { combine, maxLength, minLength, regexp } from 'favalid';
import { RootState } from './reducers';

export type SignUp = {
	form: {
		userName: string;
		mailAddress: string;
		password: string;
	};
	edited: {
		userName: boolean;
		mailAddress: boolean;
		password: boolean;
	};
	validationErrors: {
		userName: { error: boolean; message: string };
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
export const changeSignUpForm = actionCreator<ChangePayload>(
	'CHANGE_SIGN_UP_VALUE',
);

const INITIAL_STATE = {
	form: {
		userName: '',
		mailAddress: '',
		password: '',
	},
	edited: {
		userName: false,
		mailAddress: false,
		password: false,
	},
	validationErrors: {
		userName: { error: false, message: '' },
		mailAddress: { error: false, message: '' },
		password: { error: false, message: '' },
	},
};

/**
 * validations
 */
const minUserNameLengthMessage = () => '2文字以上で入力してください';
const maxUserNameLengthMessage = () => '20文字以内で入力してください';
const minEmailLengthMessage = () => '10文字以上で入力してください';
const maxEmailLengthMessage = () => '100文字以内で入力してください';
const minPasswordLengthMessage = () => '6文字以上で入力してください';
const maxPasswordLengthMessage = () => '16文字以内で入力してください';
const emailMessage = () => 'メールアドレスの形式が不正です。';
/* eslint-disable-next-line */
const mailCheck = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const usernameValidator = combine(
	minLength(2, minUserNameLengthMessage),
	maxLength(20, maxUserNameLengthMessage),
);

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
	userName: usernameValidator(form.userName),
	mailAddress: emailValidator(form.mailAddress),
	password: passwordValidator(form.password),
});

/**
 * reducer
 */
const reducer = reducerWithInitialState(INITIAL_STATE).case(
	changeSignUpForm,
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
 * selectors
 */
export const selectSignUp = createSelector(
	[(state: RootState) => state.ui.signUp],
	(signUp) => signUp,
);

export const selectSignUpUserNameErrors = createSelector(
	[(state: RootState) => state.ui.signUp],
	(signUp) => {
		return signUp.edited.userName && signUp.validationErrors.userName.error;
	},
);
export const selectSignUpMailAdressErrors = createSelector(
	[(state: RootState) => state.ui.signUp],
	(signUp) => {
		return (
			signUp.edited.mailAddress && signUp.validationErrors.mailAddress.error
		);
	},
);

export const selectSignUpPasswordErrors = createSelector(
	[(state: RootState) => state.ui.signUp],
	(signUp) => {
		return signUp.edited.password && signUp.validationErrors.password.error;
	},
);

export const selectSignUpValidationErrors = createSelector(
	[(state: RootState) => state.ui.signUp],
	(signUp) => {
		return (
			!signUp.edited.userName ||
			!signUp.edited.mailAddress ||
			!signUp.edited.password ||
			signUp.validationErrors.userName.error ||
			signUp.validationErrors.mailAddress.error ||
			signUp.validationErrors.password.error
		);
	},
);
