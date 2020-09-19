import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from './reducers';

type UserInfo = {
	id: number;
	userName: string;
	mailAdress: string;
	missions: Mission[];
	cheers: Cheer[];
};
