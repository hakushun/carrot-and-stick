import React from 'react';
import { ApplicationLayout } from '../../Layout/ApplicationLayout';
import styles from './index.module.scss';

type Props = {
	openForm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	handleDragstart: (e: React.DragEvent<HTMLLIElement>) => void;
	handleDragover: (e: React.DragEvent<HTMLUListElement>) => void;
	handleDrop: (e: React.DragEvent<HTMLUListElement>) => void;
};
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

// http://localhost:3000/mission
export const Mission: React.FC<Props> = React.memo(
	({ openForm, handleDragstart, handleDragover, handleDrop }) => {
		return (
			<ApplicationLayout>
				<section className={styles.mission}>
					<div className={styles.mission__inner}>
						<div className={styles.mission__head}>
							<h2 className={styles.mission__title}>がんばりスト</h2>
							<div>
								<button
									type="button"
									className={styles.mission__button}
									onClick={openForm}></button>
							</div>
						</div>
						<div className={styles.wrapper}>
							<div className={styles.wrapper__inner}>
								<div className={styles.container}>
									<div className={styles.container__inner}>
										<div className={styles.container__head}>
											<h3 className={styles.container__title}>
												これからがんばる
											</h3>
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
										<div
											className={styles.container__list}
											data-js="mission_list">
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
																		<div
																			className={styles.pict}
																			data-pict="red">
																			<img
																				className={styles.pict__img}
																				src="/images/ganbalist/alert.svg"
																			/>
																			<span
																				className={`${styles.pict__text} ${styles.pict__textDate}`}>
																				2020.10.01
																			</span>
																		</div>
																	</div>
																	<div className={styles.pictBox__inner}>
																		<div className={styles.pict}>
																			<img
																				className={styles.pict__img}
																				src="/images/ganbalist/point.svg"
																			/>
																			<span
																				className={`${styles.pict__text} ${styles.pict__textPoint}`}>
																				150{' '}
																				<span
																					className={styles.pict__pointValue}>
																					{' '}
																					pt
																				</span>
																			</span>
																		</div>
																		<div
																			className={styles.pict}
																			data-pict="blue">
																			<img
																				className={styles.pict__img}
																				src="/images/ganbalist/heart.svg"
																			/>
																			<span className={styles.pict__text}>
																				100
																			</span>
																		</div>
																		<div
																			className={styles.pict}
																			data-pict="orange">
																			<img
																				className={styles.pict__img}
																				src="/images/ganbalist/muscle.svg"
																			/>
																			<span className={styles.pict__text}>
																				100
																			</span>
																		</div>
																	</div>
																</div>
																<div className={styles.itemContent}>
																	<p className={styles.itemTitle}>
																		タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
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
																			<img src="/images/ganbalist/alert.svg" />
																			<span>日付</span>
																		</div>
																		<div className={styles.pict}>
																			ポイント<span>pt</span>
																		</div>
																	</div>
																	<div className={styles.itemPict__inner}>
																		<div className={styles.pict}>
																			<img src="/images/ganbalist/heart.svg" />
																			<span>メンタル</span>
																		</div>
																		<div className={styles.pict}>
																			<img src="/images/ganbalist/muscle.svg" />
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
																			<img src="/images/ganbalist/alert.svg" />
																			<span>日付</span>
																		</div>
																		<div className={styles.pict}>
																			ポイント<span>pt</span>
																		</div>
																	</div>
																	<div className={styles.itemPict__inner}>
																		<div className={styles.pict}>
																			<img src="/images/ganbalist/heart.svg" />
																			<span>メンタル</span>
																		</div>
																		<div className={styles.pict}>
																			<img src="/images/ganbalist/muscle.svg" />
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
																			<img src="/images/ganbalist/alert.svg" />
																			<span>日付</span>
																		</div>
																		<div className={styles.pict}>
																			ポイント<span>pt</span>
																		</div>
																	</div>
																	<div className={styles.itemPict__inner}>
																		<div className={styles.pict}>
																			<img src="/images/ganbalist/heart.svg" />
																			<span>メンタル</span>
																		</div>
																		<div className={styles.pict}>
																			<img src="/images/ganbalist/muscle.svg" />
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
																			<img src="/images/ganbalist/alert.svg" />
																			<span>日付</span>
																		</div>
																		<div className={styles.pict}>
																			ポイント<span>pt</span>
																		</div>
																	</div>
																	<div className={styles.itemPict__inner}>
																		<div className={styles.pict}>
																			<img src="/images/ganbalist/heart.svg" />
																			<span>メンタル</span>
																		</div>
																		<div className={styles.pict}>
																			<img src="/images/ganbalist/muscle.svg" />
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
																			<img src="/images/ganbalist/alert.svg" />
																			<span>日付</span>
																		</div>
																		<div className={styles.pict}>
																			ポイント<span>pt</span>
																		</div>
																	</div>
																	<div className={styles.itemPict__inner}>
																		<div className={styles.pict}>
																			<img src="/images/ganbalist/heart.svg" />
																			<span>メンタル</span>
																		</div>
																		<div className={styles.pict}>
																			<img src="/images/ganbalist/muscle.svg" />
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
																			<img src="/images/ganbalist/alert.svg" />
																			<span>日付</span>
																		</div>
																		<div className={styles.pict}>
																			ポイント<span>pt</span>
																		</div>
																	</div>
																	<div className={styles.itemPict__inner}>
																		<div className={styles.pict}>
																			<img src="/images/ganbalist/heart.svg" />
																			<span>メンタル</span>
																		</div>
																		<div className={styles.pict}>
																			<img src="/images/ganbalist/muscle.svg" />
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
											<h3 className={styles.container__title}>
												今がんばってる
											</h3>
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
										<div
											className={styles.container__list}
											data-js="mission_list">
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
																			<img src="/images/ganbalist/alert.svg" />
																			<span>日付</span>
																		</div>
																		<div className={styles.pict}>
																			ポイント<span>pt</span>
																		</div>
																	</div>
																	<div className={styles.itemPict__inner}>
																		<div className={styles.pict}>
																			<img src="/images/ganbalist/heart.svg" />
																			<span>メンタル</span>
																		</div>
																		<div className={styles.pict}>
																			<img src="/images/ganbalist/muscle.svg" />
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
					</div>
				</section>
			</ApplicationLayout>
		);
	},
);
