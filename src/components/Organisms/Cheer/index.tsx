import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCheer, initializeCheer } from '../../../redux/modules/cheer';
import { selectCheers } from '../../../redux/modules/cheers';
import { selectModal } from '../../../redux/modules/modal';
import { changeKey, selectCheersRadio } from '../../../redux/modules/sortKey';
import { ApplicationLayout } from '../../Layout/ApplicationLayout';
import { CheerForm } from '../CheerForm';
import { Presentation } from './Presentation';

export const Cheer: React.FC = () => {
	const dispatch = useDispatch();
	const cheers = useSelector(selectCheers);
	const modal = useSelector(selectModal);
	const cheersRadio = useSelector(selectCheersRadio);

	const openForm = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();
			dispatch(initializeCheer());
		},
		[dispatch],
	);

	const handleEdit = useCallback(
		(id: number, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
			e.preventDefault();
			const target = cheers.find((cheer) => cheer.id === id);
			target && dispatch(editCheer({ cheer: target }));
		},
		[cheers],
	);

	const handleChangeSorkKey = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
			dispatch(changeKey({ name: e.target.name, value: e.target.value }));
		},
		[dispatch],
	);

	return (
		<ApplicationLayout>
			{modal && <CheerForm />}
			<Presentation
				cheers={cheers}
				cheersRadio={cheersRadio}
				openForm={openForm}
				handleEdit={handleEdit}
				handleChangeSorkKey={handleChangeSorkKey}
			/>
		</ApplicationLayout>
	);
};
