import React, { useCallback, useEffect } from 'react';
import { ApplicationLayout } from '../../Layout/ApplicationLayout';
import styles from './index.module.scss';

// http://localhost:3000/mission
export const Mission: React.FC = React.memo(() => {
	const selectOptionList = [
		{ id: 1, name: '期限が近い順' },
		{ id: 2, name: '期限が遅い順' },
		{ id: 3, name: 'ポイントが多い順' },
		{ id: 4, name: 'ポイントが少ない順' },
		{ id: 5, name: '精神的につらい順' },
		{ id: 6, name: '精神的に楽な順' },
		{ id: 7, name: '体力的につらい順' },
		{ id: 8, name: '体力的に楽な順' },
	];

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

	// 初回読み込み時とresize eventが走ったときに発火
	useEffect(() => {
		setHeightOnList();
		window.addEventListener('resize', setHeightOnList);
		return () => window.removeEventListener('resize', setHeightOnList);
	}, []);

	return (
		<ApplicationLayout>
			<section className={styles.mission}>
				<div className={styles.mission__head}>
					<h2 className={styles.mission__title}>がんばりスト</h2>
					<div>
						<button type="button" className={styles.mission__button}></button>
					</div>
				</div>
				<div className={styles.wrapper}>
					<div className={styles.wrapper__inner}>
						<div className={styles.container}>
							<div className={styles.container__inner}>
								<div className={styles.container__head}>
									<h3 className={styles.container__title}>これからがんばる</h3>
									<div className={styles.container__selectWrapper}>
										<select className={styles.container__selectbox}>
											{selectOptionList.map((opt) => {
												return (
													<option key={opt.id} value={opt.id}>
														{opt.name}
													</option>
												);
											})}
										</select>
									</div>
								</div>
								<div className={styles.container__list} data-js="mission_list">
									<ul
										className={styles.list}
										onDragOver={(e) => handleDragover(e)}
										onDrop={(e) => handleDrop(e)}>
										<li
											className={styles.list__item}
											draggable="true"
											onDragStart={(e) => handleDragstart(e)}>
											<a href="#" className={styles.list__itemLink}>
												<div className={styles.listItem}>
													<div className={styles.listItem__inner}>
														<div className={styles.pictBox}>
															<div className={styles.pictBox__inner}>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>日付</span>
																</div>
																<div className={styles.pict}>
																	ポイント<span>pt</span>
																</div>
															</div>
															<div className={styles.itemPict__inner}>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>メンタル</span>
																</div>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>フィジカル</span>
																</div>
															</div>
														</div>
														<div className={styles.itemContent}>
															<p className={styles.itemTitle}>
																タイトルタイトルタイトルタイトルタイトルタイトル
															</p>
														</div>
													</div>
												</div>
											</a>
										</li>
										<li
											className={styles.list__item}
											draggable="true"
											onDragStart={(e) => handleDragstart(e)}>
											<a href="#" className={styles.list__itemLink}>
												<div className={styles.listItem}>
													<div className={styles.listItem__inner}>
														<div className={styles.pictBox}>
															<div className={styles.pictBox__inner}>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>日付</span>
																</div>
																<div className={styles.pict}>
																	ポイント<span>pt</span>
																</div>
															</div>
															<div className={styles.itemPict__inner}>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>メンタル</span>
																</div>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>フィジカル</span>
																</div>
															</div>
														</div>
														<div className={styles.itemContent}>
															<p className={styles.itemTitle}>
																タイトルタイトルタイトルタイトルタイトルタイトル
															</p>
														</div>
													</div>
												</div>
											</a>
										</li>
										<li
											className={styles.list__item}
											draggable="true"
											onDragStart={(e) => handleDragstart(e)}>
											<a href="#" className={styles.list__itemLink}>
												<div className={styles.listItem}>
													<div className={styles.listItem__inner}>
														<div className={styles.pictBox}>
															<div className={styles.pictBox__inner}>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>日付</span>
																</div>
																<div className={styles.pict}>
																	ポイント<span>pt</span>
																</div>
															</div>
															<div className={styles.itemPict__inner}>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>メンタル</span>
																</div>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>フィジカル</span>
																</div>
															</div>
														</div>
														<div className={styles.itemContent}>
															<p className={styles.itemTitle}>
																タイトルタイトルタイトルタイトルタイトルタイトル
															</p>
														</div>
													</div>
												</div>
											</a>
										</li>
										<li
											className={styles.list__item}
											draggable="true"
											onDragStart={(e) => handleDragstart(e)}>
											<a href="#" className={styles.list__itemLink}>
												<div className={styles.listItem}>
													<div className={styles.listItem__inner}>
														<div className={styles.pictBox}>
															<div className={styles.pictBox__inner}>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>日付</span>
																</div>
																<div className={styles.pict}>
																	ポイント<span>pt</span>
																</div>
															</div>
															<div className={styles.itemPict__inner}>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>メンタル</span>
																</div>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>フィジカル</span>
																</div>
															</div>
														</div>
														<div className={styles.itemContent}>
															<p className={styles.itemTitle}>
																タイトルタイトルタイトルタイトルタイトルタイトル
															</p>
														</div>
													</div>
												</div>
											</a>
										</li>
										<li
											className={styles.list__item}
											draggable="true"
											onDragStart={(e) => handleDragstart(e)}>
											<a href="#" className={styles.list__itemLink}>
												<div className={styles.listItem}>
													<div className={styles.listItem__inner}>
														<div className={styles.pictBox}>
															<div className={styles.pictBox__inner}>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>日付</span>
																</div>
																<div className={styles.pict}>
																	ポイント<span>pt</span>
																</div>
															</div>
															<div className={styles.itemPict__inner}>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>メンタル</span>
																</div>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>フィジカル</span>
																</div>
															</div>
														</div>
														<div className={styles.itemContent}>
															<p className={styles.itemTitle}>
																タイトルタイトルタイトルタイトルタイトルタイトル
															</p>
														</div>
													</div>
												</div>
											</a>
										</li>
										<li
											className={styles.list__item}
											draggable="true"
											onDragStart={(e) => handleDragstart(e)}>
											<a href="#" className={styles.list__itemLink}>
												<div className={styles.listItem}>
													<div className={styles.listItem__inner}>
														<div className={styles.pictBox}>
															<div className={styles.pictBox__inner}>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>日付</span>
																</div>
																<div className={styles.pict}>
																	ポイント<span>pt</span>
																</div>
															</div>
															<div className={styles.itemPict__inner}>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>メンタル</span>
																</div>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>フィジカル</span>
																</div>
															</div>
														</div>
														<div className={styles.itemContent}>
															<p className={styles.itemTitle}>
																タイトルタイトルタイトルタイトルタイトルタイトル
															</p>
														</div>
													</div>
												</div>
											</a>
										</li>
										<li
											className={styles.list__item}
											draggable="true"
											onDragStart={(e) => handleDragstart(e)}>
											<a href="#" className={styles.list__itemLink}>
												<div className={styles.listItem}>
													<div className={styles.listItem__inner}>
														<div className={styles.pictBox}>
															<div className={styles.pictBox__inner}>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>日付</span>
																</div>
																<div className={styles.pict}>
																	ポイント<span>pt</span>
																</div>
															</div>
															<div className={styles.itemPict__inner}>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>メンタル</span>
																</div>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>フィジカル</span>
																</div>
															</div>
														</div>
														<div className={styles.itemContent}>
															<p className={styles.itemTitle}>
																タイトルタイトルタイトルタイトルタイトルタイトル
															</p>
														</div>
													</div>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.wrapper__inner}>
						<div className={styles.container}>
							<div className={styles.container__inner}>
								<div className={styles.container__head}>
									<h3 className={styles.container__title}>今がんばってる</h3>
									<div className={styles.container__selectWrapper}>
										<select className={styles.container__selectbox}>
											{selectOptionList.map((opt) => {
												return (
													<option key={opt.id} value={opt.id}>
														{opt.name}
													</option>
												);
											})}
										</select>
									</div>
								</div>
								<div className={styles.container__list} data-js="mission_list">
									<ul
										className={styles.list}
										onDragOver={(e) => handleDragover(e)}
										onDrop={(e) => handleDrop(e)}>
										<li
											className={styles.list__item}
											draggable="true"
											onDragStart={(e) => handleDragstart(e)}>
											<a href="#" className={styles.list__itemLink}>
												<div className={styles.listItem}>
													<div className={styles.listItem__inner}>
														<div className={styles.pictBox}>
															<div className={styles.pictBox__inner}>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>日付</span>
																</div>
																<div className={styles.pict}>
																	ポイント<span>pt</span>
																</div>
															</div>
															<div className={styles.itemPict__inner}>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>メンタル</span>
																</div>
																<div className={styles.pict}>
																	<img src="svg" />
																	<span>フィジカル</span>
																</div>
															</div>
														</div>
														<div className={styles.itemContent}>
															<p className={styles.itemTitle}>
																タイトルタイトルタイトルタイトルタイトルタイトル
															</p>
														</div>
													</div>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className={styles.box}
					onDragOver={(e) => handleDragover(e)}
					onDrop={(e) => handleDrop(e)}>
					<div className={styles.box__top}></div>
					<div className={styles.box__body}></div>
				</div>
			</section>
		</ApplicationLayout>
	);
});
