import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change, selectCheer } from '../../../redux/modules/cheer';
import {
	createCheer,
	deleteCheer,
	updateCheer,
} from '../../../redux/modules/cheers';
import { Modal } from '../Modal';
import { CheerForm as Presentation } from './Presentation';

export const CheerForm: React.FC = React.memo(() => {
	const dispatch = useDispatch();
	const cheer = useSelector(selectCheer);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			dispatch(change({ name: e.target.name, value: e.target.value }));
		},
		[dispatch],
	);

	const handleCreateCheer = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();
			dispatch(
				createCheer({
					title: cheer.title,
					point: cheer.point,
					memo: cheer.memo,
				}),
			);
		},
		[cheer],
	);

	const handleUpdateCheer = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();
			dispatch(updateCheer(cheer));
		},
		[cheer],
	);

	const handleDeleteCheer = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();
			dispatch(deleteCheer(cheer));
		},
		[cheer],
	);

	return (
		<Modal>
			<Presentation
				cheer={cheer}
				handleChange={handleChange}
				handleCreateCheer={handleCreateCheer}
				handleUpdateCheer={handleUpdateCheer}
				handleDeleteCheer={handleDeleteCheer}
			/>
		</Modal>
	);
});
