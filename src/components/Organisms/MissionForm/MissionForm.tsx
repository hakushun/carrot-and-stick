import React from 'react';
import { Mission } from '../../../redux/modules/mission';
import styles from './index.module.scss';

type Props = {
	mission: Mission;
	handleChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	handleCreateMission: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
	handleUpdateMission: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
	handleDeleteMission: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
};

export const MissionForm: React.FC<Props> = React.memo(
	({
		mission,
		handleChange,
		handleCreateMission,
		handleUpdateMission,
		handleDeleteMission,
	}) => {
		return (
			<form className={styles.form}>
				<div className={styles.form__title}>
					<label htmlFor="mission_title" className={styles.form__label}>
						<span className={styles.form__labelTitle}>タイトル</span>
						<textarea
							className={styles.form__textarea}
							id="mission_title"
							name="title"
							value={mission.title}
							required
							aria-required
							maxLength={100}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div className={styles.form__content}>
					<div className={styles.form__contentInner}>
						<div className={styles.form__dueDate}>
							<label htmlFor="mission_dueDate" className={styles.form__label}>
								<span className={styles.form__labelTitle}>期限</span>
								<input
									className={styles.form__inputDate}
									type="date"
									id="mission_dueDate"
									name="dueDate"
									value={mission.dueDate}
									required
									aria-required
									onChange={handleChange}
								/>
							</label>
						</div>
						<p className={styles.form__subTitle}>つらつらスコア</p>
						<div className={styles.form__score}>
							<div className={styles.form__scoreInner}>
								<label
									htmlFor="mission_mentalDamage"
									className={styles.form__label}>
									<span
										className={`${styles.form__labelTitle} ${styles.form__labelTitle_socore}`}>
										精神
									</span>
									<input
										className={styles.form__inputScore}
										type="number"
										id="mission_mentalDamage"
										name="mentalDamage"
										value={mission.mentalDamage}
										required
										aria-required
										min={0}
										max={100}
										onChange={handleChange}
									/>
								</label>
							</div>
							<div className={styles.form__scoreInner}>
								<label
									htmlFor="mission_physicalDamage"
									className={styles.form__label}>
									<span
										className={`${styles.form__labelTitle} ${styles.form__labelTitle_socore}`}>
										体力
									</span>
									<input
										className={styles.form__inputScore}
										type="number"
										id="mission_physicalDamage"
										name="physicalDamage"
										value={mission.physicalDamage}
										required
										aria-required
										min={0}
										max={100}
										onChange={handleChange}
									/>
								</label>
							</div>
						</div>
						<div className={styles.form__point}>
							<label htmlFor="mission_point" className={styles.form__label}>
								<span className={styles.form__labelTitle}>
									がんばるポイント
								</span>
								<input
									className={styles.form__inputPoint}
									type="number"
									id="mission_point"
									name="point"
									value={mission.point}
									required
									aria-required
									min={0}
									max={1000}
									onChange={handleChange}
								/>
								<span>point</span>
							</label>
						</div>
					</div>
					<div className={styles.form__contentInner}>
						<label htmlFor="memo" className={styles.form__label}>
							<span className={styles.form__labelTitle}>メモ</span>
							<textarea
								className={`${styles.form__textarea} ${styles.form__textarea_memo}`}
								id="mission_memo"
								name="memo"
								value={mission.memo}
								maxLength={500}
								onChange={handleChange}
							/>
						</label>
					</div>
				</div>
				<div className={styles.form__buttonWrapper}>
					{mission.id === 0 && (
						<button
							className={styles.form__button}
							type="button"
							onClick={handleCreateMission}>
							追加する
						</button>
					)}
					{mission.id > 0 && (
						<>
							<button
								className={styles.form__button}
								type="button"
								onClick={handleUpdateMission}>
								更新する
							</button>
							<button
								className={styles.form__button}
								type="button"
								onClick={handleDeleteMission}>
								削除する
							</button>
						</>
					)}
				</div>
			</form>
		);
	},
);
