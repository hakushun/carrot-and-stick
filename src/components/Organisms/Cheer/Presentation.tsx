import React from 'react';
import styles from './index.module.scss';

export const Presentation = React.memo(() => {
	return (
		<div>
			<div>
				<h2>ご褒美リスト</h2>
				<div>
					<button type="button" className={styles.mission__button}></button>
				</div>
			</div>
		</div>
	);
});
