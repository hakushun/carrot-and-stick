import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';

export const Overlay: React.FC = React.memo((props) => {
	const { children } = props;
	return ReactDOM.createPortal(
		<div className={styles.root}>{children}</div>,
		document.getElementById('overlay')!,
	);
});
