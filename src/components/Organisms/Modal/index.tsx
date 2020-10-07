import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggle } from '../../../redux/modules/modal';
import { Overlay } from '../Overlay';
import styles from './index.module.scss';

export const Modal: React.FC = React.memo(({ children }) => {
	const dispatch = useDispatch();

	const closeModal = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();
			dispatch(toggle());
		},
		[dispatch],
	);
	return (
		<Overlay>
			<div className={styles.close}>
				<button
					type="button"
					className={styles.close__button}
					onClick={closeModal}></button>
			</div>
			<div className={styles.modal}>{children}</div>
		</Overlay>
	);
});
