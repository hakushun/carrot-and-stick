import React from 'react';
import { useSelector } from 'react-redux';
import { selectModal } from '../../../redux/modules/modal';
import { ApplicationLayout } from '../../Layout/ApplicationLayout';
import { CheerForm } from '../CheerForm';
import { Presentation } from './Presentation';

export const Cheer: React.FC = React.memo(() => {
	const modal = useSelector(selectModal);

	return (
		<ApplicationLayout>
			<CheerForm />
			<Presentation />
		</ApplicationLayout>
	);
});
