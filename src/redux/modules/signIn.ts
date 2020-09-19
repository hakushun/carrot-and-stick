import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';

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
