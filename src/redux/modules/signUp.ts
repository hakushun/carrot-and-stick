import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';

type SignUp = {
	form: {
		userName: string;
		mailAddress: string;
		password: string;
	};
	edited: {
		userName: boolean;
		mailAddress: boolean;
		password: string;
	};
	validationErrors: {
		userName: { error: boolean; message: string };
		mailAddress: { error: boolean; message: string };
		password: { error: boolean; message: string };
	};
};
