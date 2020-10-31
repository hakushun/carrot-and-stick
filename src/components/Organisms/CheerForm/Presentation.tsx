import React from 'react';
import styles from './index.module.scss';
import { Cheer } from '../../../redux/modules/cheer';

type Props = {
	cheer: Cheer;
	handleChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	handleCreateCheer: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
	handleUpdateCheer: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
	handleDeleteCheer: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
};

export const CheerForm: React.FC<Props> = React.memo(
	({
		cheer,
		handleChange,
		handleCreateCheer,
		handleUpdateCheer,
		handleDeleteCheer,
	}) => {
		return (
			<form className={styles.cheer}>
				<div className={styles.cheer__inner}>
					<label htmlFor="cheer_title" className={styles.cheer__label}>
						<span className={styles.cheer__labelTitle}>ご褒美タイトル</span>
						<textarea
							id="cheer_title"
							className={styles.cheer__textarea}
							name="title"
							required
							aria-required
							value={cheer.title}
							maxLength={1000}
							onChange={handleChange}
						/>
					</label>
					<div className={styles.cheer__flex}>
						<label htmlFor="cheer_point" className={styles.cheer__label}>
							<div className={styles.cheer__labelBox}>
								<span className={styles.cheer__labelTitle}>必要ポイント</span>
								<input
									id="cheer_point"
									className={styles.cheer__inputPoint}
									type="number"
									name="point"
									required
									aria-required
									min={0}
									max={1000}
									value={cheer.point}
									onChange={handleChange}
								/>
							</div>
						</label>
						<label htmlFor="cheer_memo" className={styles.cheer__label}>
							<span className={styles.cheer__labelTitle}>メモ</span>
							<textarea
								id="cheer_memo"
								className={
									styles.cheer__textarea + ' ' + styles.cheer__textarea_memo
								}
								name="memo"
								required
								aria-required
								value={cheer.memo}
								maxLength={1000}
								onChange={handleChange}
							/>
						</label>
					</div>
				</div>
				<div className={styles.cheer__buttonWrapper}>
					{cheer.id === 0 && (
						<button
							className={styles.cheer__button}
							type="button"
							onClick={handleCreateCheer}>
							追加する
						</button>
					)}
					{cheer.id > 0 && (
						<>
							<button
								className={styles.cheer__button}
								type="button"
								onClick={handleUpdateCheer}>
								更新する
							</button>
							<button
								className={styles.cheer__button}
								type="button"
								onClick={handleDeleteCheer}>
								削除する
							</button>
						</>
					)}
				</div>
			</form>
		);
	},
);
