import React from 'react';
import styles from './index.module.scss';
import { Cheer } from '../../../redux/modules/cheer';

type Props = {
	cheers: Cheer[];
	cheersRadio: string;
	openForm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	handleEdit: (
		id: number,
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) => void;
	handleChangeSorkKey: (
		e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
	) => void;
};

const selectOptionList = [
	{ id: 1, key: 'registerDate-up', name: '登録日が古い順' },
	{ id: 2, key: 'registerDate-down', name: '登録日が新しい順' },
	{ id: 3, key: 'point-down', name: '交換に必要なポイントが多い順' },
	{ id: 4, key: 'point-up', name: '交換に必要なポイントが少ない順' },
];

// http://localhost:3000/cheer
export const Presentation: React.FC<Props> = ({
	cheers,
	cheersRadio,
	openForm,
	handleEdit,
	handleChangeSorkKey,
}) => {
	return (
		<section className={styles.cheer}>
			<div className={styles.cheer__inner}>
				<div className={styles.cheer__head}>
					<h2 className={styles.cheer__title}>ご褒美一覧</h2>
					<div>
						<button
							type="button"
							className={styles.cheer__button}
							onClick={openForm}></button>
					</div>
				</div>
				<div className={styles.cheer__display}>
					<div className={styles.cheer__radioWrapper}>
						<span className={styles.cheer__radio}>
							<input
								className={styles.cheer__radioBtn}
								type="radio"
								id="all"
								name="cheersRadio"
								value="all"
								checked={cheersRadio === 'all'}
								onChange={handleChangeSorkKey}
							/>
							<label className={styles.cheer__radioText} htmlFor="all">
								全て表示
							</label>
						</span>
						<span className={styles.cheer__radio}>
							<input
								className={styles.cheer__radiotBtn}
								type="radio"
								id="canChange"
								name="cheersRadio"
								value="canChange"
								checked={cheersRadio === 'canChange'}
								onChange={handleChangeSorkKey}
							/>
							<label className={styles.cheer__radioText} htmlFor="canChange">
								交換できるものだけ表示
							</label>
						</span>
					</div>
					<div className={styles.cheer__selectWrapper}>
						<select
							className={styles.cheer__selectbox}
							name="cheers"
							onChange={handleChangeSorkKey}>
							{selectOptionList.map((opt) => {
								return (
									<option key={opt.id} value={opt.key}>
										{opt.name}
									</option>
								);
							})}
						</select>
					</div>
				</div>
				<div className={styles.cheerList}>
					<div className={styles.cheerList__inner}>
						{cheers.length > 0 &&
							cheers.map((cheer) => {
								console.log('発火');
								return (
									<a
										href="#"
										className={styles.cheerList__item}
										key={cheer.id}
										id={`${cheer.id}`}
										onClick={(e) => handleEdit(cheer.id, e)}>
										<div className={styles.cheerList__icon}>
											<img
												src={
													cheer.point > 100
														? '/images/cheerlist/gold.svg'
														: cheer.point > 50
														? '/images/cheerlist/silver.svg'
														: '/images/cheerlist/bronze.svg'
												}
												className={styles.cheerList__iconImg}
												alt="アイコン"
											/>
										</div>
										<div>
											<span className={styles.cheerList__point}>
												{cheer.point}ポイント
											</span>
										</div>
										<div className={styles.cheerList__titleWrapper}>
											<span className={styles.cheerList__title}>
												{cheer.title}
											</span>
										</div>
									</a>
								);
							})}
					</div>
				</div>
			</div>
		</section>
	);
};
