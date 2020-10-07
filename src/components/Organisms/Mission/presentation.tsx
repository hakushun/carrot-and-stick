import React from 'react';
import { ApplicationLayout } from '../../Layout/ApplicationLayout';
import styles from './index.module.scss';
import { Mission as typeMission } from '../../../redux/modules/mission';

type Props = {
	newMissions: typeMission[];
	progreeMissions: typeMission[];
	openForm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	handleEdit: (
		id: number,
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) => void;
	handleDragstart: (e: React.DragEvent<HTMLLIElement>) => void;
	handleDragover: (
		e: React.DragEvent<HTMLUListElement | HTMLDivElement>,
	) => void;
	handleDrop: (e: React.DragEvent<HTMLUListElement | HTMLDivElement>) => void;
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
	({
		newMissions,
		progreeMissions,
		openForm,
		handleEdit,
		handleDragstart,
		handleDragover,
		handleDrop,
	}) => {
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
												id="new_mission_list"
												className={styles.list}
												onDragOver={(e) => handleDragover(e)}
												onDrop={(e) => handleDrop(e)}>
												{newMissions.map((newMission) => {
													return (
														<li
															key={`mission_${newMission.id}`}
															id={`mission_${newMission.id}`}
															className={styles.list__item}
															draggable="true"
															onDragStart={(e) => handleDragstart(e)}>
															<a
																href="#"
																className={styles.list__itemLink}
																onClick={(e) => handleEdit(newMission.id, e)}>
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
																						{newMission.dueDate}
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
																						{newMission.totalPoint}{' '}
																						<span
																							className={
																								styles.pict__pointValue
																							}>
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
																						{newMission.mentalPoint}
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
																						{newMission.pysicalPoint}
																					</span>
																				</div>
																			</div>
																		</div>
																		<div className={styles.itemContent}>
																			<p className={styles.itemTitle}>
																				{newMission.title}
																			</p>
																		</div>
																	</div>
																</div>
															</a>
														</li>
													);
												})}
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
												id="progress_mission_list"
												className={styles.list}
												onDragOver={(e) => handleDragover(e)}
												onDrop={(e) => handleDrop(e)}>
												{progreeMissions.map((progreeMission) => {
													return (
														<li
															key={`mission_${progreeMission.id}`}
															id={`mission_${progreeMission.id}`}
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
																					<span>{progreeMission.dueDate}</span>
																				</div>
																				<div className={styles.pict}>
																					{progreeMission.totalPoint}
																					<span>pt</span>
																				</div>
																			</div>
																			<div className={styles.itemPict__inner}>
																				<div className={styles.pict}>
																					<img src="/images/ganbalist/heart.svg" />
																					<span>
																						{progreeMission.mentalPoint}
																					</span>
																				</div>
																				<div className={styles.pict}>
																					<img src="/images/ganbalist/muscle.svg" />
																					<span>
																						{progreeMission.pysicalPoint}
																					</span>
																				</div>
																			</div>
																		</div>
																		<div className={styles.itemContent}>
																			<p className={styles.itemTitle}>
																				{progreeMission.title}
																			</p>
																		</div>
																	</div>
																</div>
															</a>
														</li>
													);
												})}
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							id="complete_mission_list"
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
