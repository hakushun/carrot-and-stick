import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change, selectCheer } from '../../../redux/modules/cheer';
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

	return (
		<Modal>
			<Presentation cheer={cheer} handleChange={handleChange} />
		</Modal>
	);
});
