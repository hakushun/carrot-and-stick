import React from 'react';
import { Overlay } from '../Overlay';
import styles from './index.module.scss';

export const Modal: React.FC = React.memo(({ children }) => {
	// close modalの関数作る
	return (
		<Overlay>
			<div className={styles.close}>
				<button type="button" className={styles.close__button}></button>
			</div>
			<div className={styles.modal}>{children}</div>
		</Overlay>
	);
});
