import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectModal, toggle } from '../../../redux/modules/modal';
import { MissionForm } from '../MissionForm';
import { Mission as Presentational } from './presentation';

export const Mission: React.FC = React.memo(() => {
	const dispatch = useDispatch();
	const modal = useSelector(selectModal);
	const openForm = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();
			dispatch(toggle());
		},
		[dispatch],
	);

	const handleDragstart = useCallback((e: React.DragEvent<HTMLLIElement>) => {
		// あとで要素にid振る
		e.dataTransfer.setData('text/plain', (e.target as HTMLLIElement).id);
	}, []);

	const handleDragover = useCallback((e: React.DragEvent<HTMLUListElement>) => {
		e.preventDefault();
		e.dataTransfer.dropEffect = 'move';
	}, []);

	const handleDrop = useCallback((e: React.DragEvent<HTMLUListElement>) => {
		e.preventDefault();
		const data = e.dataTransfer.getData('text/plain');
		console.log('D&D');
	}, []);

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
				openForm={openForm}
				handleDragstart={handleDragstart}
				handleDragover={handleDragover}
				handleDrop={handleDrop}
			/>
		</>
	);
});
