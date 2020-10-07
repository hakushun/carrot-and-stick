import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change, selectMission } from '../../../redux/modules/mission';
import {
	createMission,
	deleteMission,
	updateMission,
} from '../../../redux/modules/missions';
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

	const handleCreateMission = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();
			dispatch(
				createMission({
					title: mission.title,
					dueDate: mission.dueDate,
					mentalPoint: mission.mentalPoint,
					pysicalPoint: mission.pysicalPoint,
					totalPoint: mission.totalPoint,
					memo: mission.memo,
				}),
			);
		},
		[mission],
	);

	const handleUpdateMission = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();
			dispatch(updateMission(mission));
		},
		[mission],
	);
	const handleDeleteMission = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();
			dispatch(deleteMission(mission));
		},
		[mission],
	);
	return (
		<Modal>
			<Presentational
				mission={mission}
				handleChange={handleChange}
				handleCreateMission={handleCreateMission}
				handleUpdateMission={handleUpdateMission}
				handleDeleteMission={handleDeleteMission}
			/>
		</Modal>
	);
});
