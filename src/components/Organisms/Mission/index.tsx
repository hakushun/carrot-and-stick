import React from 'react';
import { MissionForm } from '../MissionForm';
import { Mission as Presentational } from './presentation';

export const Mission: React.FC = React.memo(() => {
	return (
		<>
			<MissionForm />
			<Presentational />
		</>
	);
});
