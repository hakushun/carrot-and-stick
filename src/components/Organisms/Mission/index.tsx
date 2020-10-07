import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialize } from '../../../redux/modules/mission';
import {
	changeStatus,
	selectMissions,
	selectNewMissions,
	selectProgressMissions,
} from '../../../redux/modules/missions';
import { selectModal } from '../../../redux/modules/modal';
import { MissionForm } from '../MissionForm';
import { Mission as Presentational } from './presentation';

export const Mission: React.FC = React.memo(() => {
	const dispatch = useDispatch();
	const modal = useSelector(selectModal);
	const missions = useSelector(selectMissions);
	const newMissions = useSelector(selectNewMissions);
	const progreeMissions = useSelector(selectProgressMissions);

	const openForm = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();
			dispatch(initialize());
		},
		[dispatch],
	);

	const handleChangeStatus = useCallback(
		(mission, status) => {
			dispatch(changeStatus({ mission, status }));
		},
		[dispatch],
	);

	const handleDragstart = useCallback((e: React.DragEvent<HTMLLIElement>) => {
		e.dataTransfer.setData('text/plain', (e.target as HTMLLIElement).id);
	}, []);

	const handleDragover = useCallback(
		(e: React.DragEvent<HTMLUListElement | HTMLDivElement>) => {
			e.preventDefault();
			e.dataTransfer.dropEffect = 'move';
		},
		[],
	);

	const handleDrop = useCallback(
		(e: React.DragEvent<HTMLUListElement | HTMLDivElement>) => {
			e.preventDefault();
			const data = e.dataTransfer.getData('text/plain');
			const id = parseInt(data.split('_')[1], 10);
			const targetMission = missions.find((mission) => mission.id === id)!;
			const targetArea = (e.currentTarget as HTMLUListElement).id;

			if (targetArea === 'new_mission_list' && targetMission.status !== 'new') {
				handleChangeStatus(targetMission, 'new');
			}
			if (
				targetArea === 'progress_mission_list' &&
				targetMission.status !== 'progress'
			) {
				handleChangeStatus(targetMission, 'progress');
			}
			if (
				targetArea === 'complete_mission_list' &&
				targetMission.status !== 'complete'
			) {
				handleChangeStatus(targetMission, 'complete');
			}
		},
		[missions],
	);

	// windowの高さの半分を取得
	const calculateHeight = () => {
		const windowHeight = window.innerHeight;
		const listHeight = windowHeight * 0.5;
		return listHeight;
	};

	// windowの高さの半分の値をlistのheightに適用する
	const setHeightOnList = () => {
		const targetLists = Array.from(
			document.querySelectorAll('[data-js=mission_list]'),
		) as HTMLElement[];
		targetLists.forEach((list) => {
			const height = calculateHeight().toString();
			list.style.height = height + 'px';
		});
	};

	// 初回読み込み時とresize eventが走ったときに発火
	useEffect(() => {
		setHeightOnList();
		window.addEventListener('resize', setHeightOnList);
		return () => window.removeEventListener('resize', setHeightOnList);
	}, []);

	return (
		<>
			{modal && <MissionForm />}
			<Presentational
				newMissions={newMissions}
				progreeMissions={progreeMissions}
				openForm={openForm}
				handleDragstart={handleDragstart}
				handleDragover={handleDragover}
				handleDrop={handleDrop}
			/>
		</>
	);
});
