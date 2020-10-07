import React from 'react';
import { Modal } from '../Modal';
import { CheerForm as Presentation } from './Presentation';

export const CheerForm: React.FC = React.memo(() => {
	return (
		<Modal>
			<Presentation />
		</Modal>
	);
});
