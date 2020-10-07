import React from 'react';
import styles from './index.module.scss';
import { Cheer } from '../../../redux/modules/cheer';

type Props = {
	cheer: Cheer;
};

export const CheerForm: React.FC<Props> = React.memo(() => {
	return (
		<form className={styles.cheer}>
			<div>
				<label htmlFor="cheer_title" className={styles.cheer__title}>
					<span>ご褒美タイトル</span>
					<textarea
						id="cheer_title"
						className={styles.cheer__inputTitle}
						// type="text"
						name="title"
						required
						aria-required
						// value={cheer.title}
						maxLength={1000}
						onChange={() => console.log('発火')}
					/>
				</label>
				<div className={styles.cheer__flex}>
					<label htmlFor="cheer_point">
						<span>必要ポイント</span>
						<input
							id="cheer_point"
							className={styles.cheer__inputPoint}
							type="number"
							required
							aria-required
							min={0}
							max={100}
							// value={cheer.point}
							onChange={() => console.log('発火')}
						/>
					</label>
					<label htmlFor="cheer_memo">
						<span>メモ</span>
						<textarea
							id="cheer_memo"
							className={styles.cheer__inputMemo}
							// type="text"
							required
							aria-required
							// value={cheer.memo}
							maxLength={1000}
							onChange={() => console.log('発火')}
						/>
					</label>
				</div>
			</div>
			<div className={styles.form__buttonWrapper}>
				<button className={styles.form__button} type="button">
					追加する
				</button>
				<button className={styles.form__button} type="button">
					編集する
				</button>
				<button className={styles.form__button} type="button">
					更新する
				</button>
				<button className={styles.form__button} type="button">
					削除する
				</button>
			</div>
		</form>
	);
});
