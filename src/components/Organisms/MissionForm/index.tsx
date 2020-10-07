import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change, selectMission } from '../../../redux/modules/mission';
import { Modal } from '../Modal';
import { MissionForm as Presentational } from './MissionForm';

export const MissionForm: React.FC = React.memo(() => {
	const dispatch = useDispatch();
	const mission = useSelector(selectMission);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			dispatch(change({ name: e.target.name, value: e.target.value }));
		},
		[dispatch],
	);

	return (
		<Modal>
			<Presentational mission={mission} handleChange={handleChange} />
		</Modal>
	);
});
